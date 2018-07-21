import React, { Component } from 'react';
import './App.css';
// import axios from "axios";
import Layout from './components/Layout';
import Nav from './components/Navbar';
import Footer from './components/Footer';
import ToggleRender from './components/ToggleRenderProps';


import gql from "graphql-tag";
import {
  graphql,
} from 'react-apollo';
import ChannelList from './components/ChannelList'

// const cache = new InMemoryCache();
// const link = new HttpLink();


// const channelsListQuery = gql`
//    query ChannelsListQuery {
//      channels {
//        id
//        name
//      }
//    }
//  `;
// const ChannelsListWithData = graphql(channelsListQuery)(ChannelList);


// client
//   .query({
//     query: gql`
//       {
//         channels{
//           name
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));
class App extends Component {
  
  render() {

    return (

      <div className="App">
        <Nav />
        <Layout />
         
        <Footer />
      </div>
       
    );
  }
}



// import React from "react";
// import { render } from "react-dom";

// import ApolloClient from "apollo-boost";
// import { ApolloProvider, Query } from "react-apollo";
// import gql from "graphql-tag";

// const client = new ApolloClient({
//   uri: `https://w5xlvm3vzz.lp.gql.zone/graphql`
// });

// // Fetch GraphQL data with plain JS
// client
//   .query({
//     query: gql`
//       {
//         rates(currency: "USD") {
//           currency
//         }
//       }
//     `
//   })
//   .then(({ data }) => console.log({ data }));

// // Fetch GraphQL data with a Query component
// const ExchangeRates = () => (
//   <Query
//     query={gql`
//       {
//         rates(currency: "USD") {
//           currency
//           rate
//         }
//       }
//     `}
//   >
//     {({ loading, error, data }) => {
//       if (loading) return <p>Loading...</p>;
//       if (error) return <p>Error :(</p>;

//       return data.rates.map(({ currency, rate }) => (
//         <div key={currency}>
//           <p>{`${currency}: ${rate}`}</p>
//         </div>
//       ));
//     }}
//   </Query>
// );

// const App = () => (
//   <ApolloProvider client={client}>
//     <div>
//       <h2>My first Apollo app 🚀</h2>
//       <ExchangeRates />
//     </div>
//   </ApolloProvider>
// );

export default App;

