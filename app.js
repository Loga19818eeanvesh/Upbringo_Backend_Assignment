const express = require('express');

const sequelize = require('./database');
const { graphqlHTTP } = require('express-graphql');
const bodyParser = require('body-parser');

const graphqlSchema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolvers');

const Product = require('./models/product');
const Shop = require('./models/shop');
const Order = require('./models/order');
const OrderItem = require('./models/order-item');

const app = express();

app.use(bodyParser.json()); 

app.use(
  '/graphql', graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
  })
);

OrderItem.belongsTo(Product,{foreignKey: {
  allowNull: false
}});
OrderItem.belongsTo(Order);
Order.hasMany(OrderItem);
//Order.hasMany(OrderItem, {as: 'ifYouWantAlias', constraints: false, allowNull:true, defaultValue:null});


sequelize
  // .sync({ force: true })
  .sync()
  .then(result => {
    app.listen(2828);
    // console.log(result);
  })
  .catch(err => {
    console.log(err);
  });
