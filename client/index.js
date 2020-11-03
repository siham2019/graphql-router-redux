import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';
import reportWebVitals from './reportWebVitals';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';


const httpLink = new HttpLink({
uri: 'http://localhost:4000/'
});
const wsLink = new WebSocketLink({
uri: 'ws://localhost:4000/graphql',

});

const cache = new InMemoryCache();
 const link = split(
  ({ query }) => {
  const definition = getMainDefinition(query);
  return (
  definition.kind === 'OperationDefinition' &&
  definition.operation === 'subscription'
  );
  },
  wsLink,
  httpLink,
  );
const client = new ApolloClient({
cache,
link
})
ReactDOM.render(
    <ApolloProvider client={client}>
          <App />
    </ApolloProvider>


  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
