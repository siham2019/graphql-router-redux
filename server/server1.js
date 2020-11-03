const cors =require('cors');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const app = express();

app.use(cors());

const schema = gql`
  type Mutation{
    addMessage(m:String!, u:String!):String!
  }
  type Query {
    me: User
    user(id:ID!):User
    getMsg(id:ID!):Message
    allMsg:[Message!]
  }
  type User {
    id:ID
    username: String!
    age:Int!
    messages:[Message!]
  }
  type Message{
    id:ID
    text:String!
    user:User!
  }
`;

let users = {
    1: {
      id: '1',
      username: 'Robin Wieruch',
    },
    2: {
      id: '2',
      username: 'Dave Davids',
    },
  };


  let msg = {
    1: {
      id: '1',
      text: 'sksssjjss', 
      user: {
        id: '1',
        username: 'Robin Wieruch',
      },
    },
    2: {
      id: '2',
      text: 'ozeoeezaoazazo', 
      user: {
        id: '1',
        username: 'Robin Wieruch',
      },
    },
  };

/*   const me = users[1];
 */   
  const resolvers = {
    Query: {
      user: (parent, { id }) => {
        return users[id];
      },
      me: (c,x,context) => {
        return context.me;
      },
      getMsg:(parent,{id})=>{
          return msg[id];
      },
      allMsg:()=>{
           return Object.values(msg);
      }
    },
    Mutation:{
      addMessage:(parent,{m,u})=>{
       
            s=m+" "+u
           return s;
      }
    }
  };

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context:()=>{
    return {
      me: users[2]
    }
  }
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});