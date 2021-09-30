# Upbringo Assignment
Backend API using GraphQL and MySQL database for a store owner to store the transactions in cloud.

## How to start
1. Run 'npm install' on terminal to download all dependencies 
2. Run 'npm start' to start api
3. You need to have node.js and mysql installed in your machine

## Tools/Technologies used
Node.js, Express.js, MySQL, GraphQL

## You can send the following queries and mutations from the api

1. getProduct(id){
        data you want to get back
   }
   By using this query you can get data you want related to product by passing product ID.

2. getOrder(id){
        data you want to get back
   }
   By using this query you can get data you want related to order by passing order ID.


3. createProduct(productInput){
        data you want to get back
   }
   By using this mutation you can get create product and after get data you want related to product by passing productInput.


4. createOrder(orderInput){
        data you want to get back
   }
   By using this mutation you can get create order and after get data you want related to order by passing orderInput.


5. createShop(shopInputData){
        data you want to get back
   }
   By using this mutation you can get create shop and after get data you want related to shop by passing shopInput.

6. procuctInput has following format.
     productInput{
        name: String!
        price: Float!
        discount: Float!
        gst: Float!
        description: String
    }

7. orderInput has following format.
    orderInput{
        buyerName: String!
        buyerPhoneNumber: String!
        items: [orderItem!]!
    }

8. shopInput has following format.
    shopInput{
        name: String!
        phoneNumber: String
        email: String
        address: String
    }