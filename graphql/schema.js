var { buildSchema } = require('graphql');

module.exports = buildSchema(`

    type Product {
        id : ID!
        name: String
        price: Float
        discount: Float
        gst: Float
        totalAmount: Float
        description: String
    }

    type OrderItems {
        id : ID!
        name: String
        quantity: Int
        pricePerUnit : Float
        discount: Float
        gst: Float
        totalAmount: Float
    }

    type Order {
        id : ID!
        buyerName: String
        buyerPhoneNumber: String
        totalAmount: Float
        items: [OrderItems]
    }

    type Shop {
        id : ID!
        name: String
        phoneNumber: String
        email: String
        address: String
    }

    input orderItem{
        id : ID!
        quantity : Int
    }


    input productInputData {
        name: String!
        price: Float!
        discount: Float!
        gst: Float!
        description: String
    }

    input shopInputData {
        name: String!
        phoneNumber: String
        email: String
        address: String
    }

    input orderInputData {
        buyerName: String!
        buyerPhoneNumber: String!
        items: [orderItem!]!
    }

    type RootQuery {
        getProduct(id:ID!): Product!
        getOrder(id:ID!): Order!
    }

    type RootMutation {
        createProduct(productInput: productInputData): Product!
        createOrder(orderInput: orderInputData): Order!
        createShop(shopInput: shopInputData): Shop!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);