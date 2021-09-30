const validator = require('validator');

const Product = require('../models/product');
const Shop = require('../models/shop');
const Order = require('../models/order');
const OrderItem = require('../models/order-item');
const { constant } = require('lodash');

module.exports = {
  createProduct: async function({ productInput }) {
    
    const product = await Product.create(productInput);
    
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
      errors.push({ message: 'Password too short!' });
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
        orderInput.items.array.forEach(async (item)=> {
            let id=item.id;
            let quantity=item.quantity;
            const product = Product.findByPk(id);
            if(product){
                let amount = quantity*(product.price);
                totalAmount+=amount;
                await order.createOrderItem({
                    quantity : quantity,
                    pricePerUnit : product.price,
                    discount: product.discount,
                    gst : product.gst,
                    totalAmount: amount,
                });
                order.addproduct(product);
            }
        });
        order.totalAmount=totalAmount;
        await order.save;
  },

  getProduct : async function(id){
        const product=Product.findByPk(id);
        if(product){
            return product;
        }
        const error = new Error('Product doesnot exist.');
        throw error;
  },

  getOrder : async function(id){
    const order=Order.findByPk(id);
    if(order){
        return order;
    }
    const error = new Error('Order doesnot exist.');
    throw error;
}
  
  
};
