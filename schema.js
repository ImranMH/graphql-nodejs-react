const api = require('./app/api')()
var {
  makeExecutableSchema
} = require('graphql-tools');
// const {buildSchema} = require('graphql');

const typeDefs = [`
  type Query{
    books: [Book],
    users: [User],
    channels: [Channellist]
  }
  type Book {
    title: String,
    year: Int,
    author: String,
    review: Int 
  }
  type Channellist {
    id: String!,
    name: String, 
  }
  type User {
    id: Int,
    name: String,
    username: String,
    email: String,
    address:Address,
    phone: String,
    website: String 
  }
  type Address {
    city:String,
    zipcode: String
  }
  type Mutation {
    addChannel(id: String, name: String): Channellist
  }
`]

var resolvers = {
  Query: {
    books() {
      return api.books
    },
    users() {
      return api.getUsers().then(res => {
        return res.data
      })
    },
    channels(){
      return api.channels
    }
  },
  Mutation: {
    addChannel(  nn) {
      console.log('mutoin nn', nn , 'id =')
    }
  }
}
var schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

module.exports = schema