const validator = require('validator');

const Product = require('../models/product');
const Shop = require('../models/shop');
const Order = require('../models/order');
const OrderItem = require('../models/order-item');


module.exports = {
  createProduct: async function({ productInput }) {
    let amount=productInput.price-(productInput.discount/100)+productInput.gst;
    const product = await Product.create({...productInput,totalAmount:amount});
    return product;
  },

  createShop: async function({ shopInput }) {
    
    const errors = [];
    if (!validator.isEmail(shopInput.email)) {
      errors.push({ message: 'E-Mail is invalid.' });
    }
    if (
      !validator.isLength(shopInput.phoneNumber, { min: 10,max: 10 })
    ) {
      errors.push({ message: 'PhoneNumber invalid!' });
    }
    if (errors.length > 0) {
      const error = new Error('Invalid input.');
      error.data = errors;
      error.code = 422;
      throw error;
    }
    const shop =await Shop.create(shopInput);
    return shop;
  },

  createOrder: async function({ orderInput }) {
        const buyerName = orderInput.buyerName;
        const buyerPhoneNumber = orderInput.buyerPhoneNumber;
        let totalAmount = 0;
        let order = await Order.create({
            buyerName,
            buyerPhoneNumber,
            totalAmount
        });
        orderInput.items.forEach(async (item)=> {
            let id=item.id;
            let quantity=item.quantity;
            const product = await Product.findByPk(id);
            console.log(product);
            if(product){
                let amount = quantity*(product.dataValues.totalAmount);
                totalAmount+=amount;
                let orderItem=await OrderItem.create({
                    quantity : quantity,
                    pricePerUnit : product.dataValues.price,
                    discount: product.dataValues.discount,
                    gst : product.dataValues.gst,
                    totalAmount: amount
                });
                order.totalAmount+=amount;
                await order.save();
                await orderItem.setProduct(product);
                await orderItem.setOrder(order);
                await order.addOrderItem(orderItem);
                //await order.addOrderItems([orderItem]);
  
            }
        });
        return order;
  },

  getProduct : async function(ID){
        const product= await Product.findByPk(ID.id);
        if(product){
            return product;
        }
        const error = new Error('Product doesnot exist.');
        throw error;
  },

  getOrder : async function(ID){
    const order= await Order.findByPk(ID.id);
    if(order){
        let items = await order.getOrderItems;
        order = {...order,items:items};
        return order;
    }
    const error = new Error('Order doesnot exist.');
    throw error;
}
  
  
};
