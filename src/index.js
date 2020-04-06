import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App.jsx';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";
// or you can use `import gql from 'graphql-tag';` instead
const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
});

//doing a quick query here to make sure it was installed correctly 
client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));



ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
