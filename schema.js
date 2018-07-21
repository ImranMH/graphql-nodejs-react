const api = require('./app/api')()
const typeDefs = require('./app/typedef')
var {
  makeExecutableSchema
} = require('graphql-tools');
// const {buildSchema} = require('graphql');



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
      return api.getChannel().then(data=>{
        console.log('my data')

        return data
      })
    }
  },
  Mutation: {
    addChannel( root, data) {
      console.log(root)
      return api.addChannel(data).then(res=>{
        console.log(res)
      })
    }
  }
}
var schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

module.exports = schema