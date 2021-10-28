# Backend API using GraphQL and MySQL database for a store owner to store the transactions in cloud.


## How to start
1. Run 'npm install' on terminal to download all dependencies 
2. Run 'npm start' to start api
3. You need to have node.js and mysql installed in your machine

## Tools/Technologies used
Node.js, Express.js, MySQL, GraphQL

## You can send the following queries and mutations from the api

1. getProduct(id){ <br />
        data you want to get back   <br />
   } <br />
   By using this query you can get data you want related to product by passing product ID.  

2. getOrder(id){    <br />
        data you want to get back   <br />
   }    <br />
   By using this query you can get data you want related to order by passing order ID. 


3. createProduct(productInput){ <br />
        data you want to get back   <br />
   }    <br />
   By using this mutation you can get create product and after get data you want related to product by passing productInput.


4. createOrder(orderInput){ <br />
        data you want to get back   <br />
   }    <br />
   By using this mutation you can get create order and after get data you want related to order by passing orderInput.


5. createShop(shopInputData){   <br />
        data you want to get back   <br />
   }    <br />
   By using this mutation you can get create shop and after get data you want related to shop by passing shopInput.

6. procuctInput has following format.   <br />
     productInput{  <br />
        name: String!   <br />
        price: Float!   <br />
        discount: Float!    <br />
        gst: Float! <br />
        description: String <br />
    }   <br />

7. orderInput has following format. <br />
    orderInput{ <br />
        buyerName: String!  <br />
        buyerPhoneNumber: String!   <br />
        items: [orderItem!]!    <br />
    }

8. shopInput has following format.  <br />
    shopInput{  <br />
        name: String!   <br />
        phoneNumber: String <br />
        email: String   <br />
        address: String <br />
    }

9. You can get following data from getProduct query <br />
    Product {   <br />
        id : ID!    <br />
        name: String    <br />
        price: Float    <br />
        discount: Float <br />
        gst: Float  <br />
        totalAmount: Float  <br />
        description: String <br />
    }

10. You can get following data from getOrder query  <br />
    type Order {    <br />
        id : ID!    <br />
        buyerName: String   <br />
        buyerPhoneNumber: String    <br />
        totalAmount: Float  <br />
    }

## Snapshots

![create product](https://github.com/Loga19818eeanvesh/Images/blob/main/Screenshot%202021-10-01%20at%206.56.09%20PM.png)
![create shop](https://github.com/Loga19818eeanvesh/Images/blob/main/Screenshot%202021-10-01%20at%206.56.39%20PM.png)
![create order](https://github.com/Loga19818eeanvesh/Images/blob/main/Screenshot%202021-10-01%20at%206.57.12%20PM.png)
![get product](https://github.com/Loga19818eeanvesh/Images/blob/main/Screenshot%202021-10-01%20at%206.57.32%20PM.png)
![get order](https://github.com/Loga19818eeanvesh/Images/blob/main/Screenshot%202021-10-01%20at%206.58.18%20PM.png)
