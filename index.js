const express = require('express')
const bodyParser = require('body-parser')
// const graphqlHTTP = require('express-graphql');
var {
  graphqlExpress,
  graphiqlExpress
} = require('apollo-server-express');
const mongoose = require('mongoose');
require('./app/database')(mongoose)
const api = require('./app/api')()

const schema = require('./schema')

const app = express()
app.get('/', (req, res) => res.send('Hello World!'))

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
  tracing: true,
  cacheControl: true
}))
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}))
app.get('/api',(req, res)=>{
  api.getChannel().then(resdata=>{
    console.log(resdata)
     res.json(resdata.data)
  })
})
app.listen(3001, () => console.log('Now browse to localhost:3001/graphiql'))