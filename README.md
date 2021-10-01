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

9. You can get following data from getProduct query
    Product {
        id : ID!
        name: String
        price: Float
        discount: Float
        gst: Float
        totalAmount: Float
        description: String
    }

10. You can get following data from getOrder query
    type Order {
        id : ID!
        buyerName: String
        buyerPhoneNumber: String
        totalAmount: Float
    }

## Snapshots

![create product](https://github.com/Loga19818eeanvesh/Images/blob/main/Screenshot%202021-10-01%20at%206.56.09%20PM.png)
![create shop](https://github.com/Loga19818eeanvesh/Images/blob/main/Screenshot%202021-10-01%20at%206.56.39%20PM.png)
![create order](https://github.com/Loga19818eeanvesh/Images/blob/main/Screenshot%202021-10-01%20at%206.57.12%20PM.png)
![get product](https://github.com/Loga19818eeanvesh/Images/blob/main/Screenshot%202021-10-01%20at%206.57.32%20PM.png)
![get order](https://github.com/Loga19818eeanvesh/Images/blob/main/Screenshot%202021-10-01%20at%206.58.18%20PM.png)