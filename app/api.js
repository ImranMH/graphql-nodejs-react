const mongoose = require('mongoose')
const q = require('q')
const ChannelSchema = require('./model/channel.mdl')(mongoose)
ChannelModel = mongoose.model('ChannelModel', ChannelSchema)
// Some fake data
const axios = require('axios')
const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: 'J.K. Rowling',
    year: 2002
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
    year: 2012
  },
];
const channels = [
  {
    id: 1,
    name: 'Travelling',
    year: 2002
  },
  {
    id: 2,
    name: 'Sports',
    year: 2012
  },
];

module.exports = function () {
  const api= {
    getUsers: getUsers,
    books: books,
    // channels,
    getChannel,
    addChannel
  }
  return api
}
function getUsers() {
  return axios.get("https://jsonplaceholder.typicode.com/users")
}
function getChannel(){
  const defarred = q.defer()
  ChannelModel.find({}, (err, channe)=>{
    if(err) {
      defarred.reject(err)
    }
    defarred.resolve(channe)
  })
  return defarred.promise
}
function addChannel(channels) {
  const defarred = q.defer()
  console.log(channels)
  const newChannels = new ChannelModel({
    id:channels.id,
    name:channels.name,
    year:channels.year
  })
  newChannels.save((err, result)=>{
    if (err) defarred.reject(err)

    defarred.resolve(result)
  })
  return defarred.promise
}