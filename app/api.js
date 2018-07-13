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
    channels
  }
  return api
}
function getUsers() {
  return axios.get("https://jsonplaceholder.typicode.com/users")
}