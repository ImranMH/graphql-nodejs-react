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
    id: Int!,
    name: String, 
    year: Int, 
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
  type Movie {
    title:String,
    genre: String,
    country: String,
    year: Int,
    director: String,
    production: String,
  }
  type Mutation {
    addChannel(id: Int, name: String, year: Int): Channellist
    AddMovie(id: Int, name: String, year: Int): Movie
    
  }
  
`]
module.exports = typeDefs;