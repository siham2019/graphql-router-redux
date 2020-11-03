/* import cors from 'cors';

import express from 'express'; */
import a  from 'apollo-server';
const {ApolloServer,gql,PubSub} =a;
import mongoose from 'mongoose';
/* const app = express(); */
import {getUser,login,register,createPost} from './model.js';
import jwt from "jsonwebtoken"
/* import { createServer } from 'http';
 */

const pub=new PubSub()
/* app.use(cors());
 */
/* const schema = gql`
  type Mutation{
   
  }
  type Query {
   
  }

`; */
const schema = gql`
  type Query{
    g:[User!]
  }
  type Subscription{
    userActive:String!
    userAdded:User!
    newPost:Post!
  }
  type Mutation{
   login(u:String,p:String):String!
   register(u:String,p:String):User!
  }
  type Post{
    username:String!
    content:String!
    Date: String!
    auth:String!
  }
  type User{
    username:String!
    password:String!
  }
`;

  /* const resolvers = {
    Query: {
  
    },
    Mutation:{

    }
  }; */
  
  const resolvers = {
    Query: {
     g:async()=>{
      return await getUser()
     }
    },
    Mutation:{
      register:async(parent,{u,p},context)=>{
        try {
            const y=await register(u,p)
              if (y.username==="username exist") {
                console.log("qqqq ")
               throw new Error("username exist")
              } else {
                context.pub.publish("USER_NEW",{userAdded:y})
               
                    return y
                }
           } catch (error) {
              throw new Error(error) 
           } 
      }
      ,
      login:async(parent,{u,p},context)=>{
        const y=await login(u,p)
         if (y==="login successfull") {
          const s=jwt.sign({username:u},"f!t&tah",{
           
            expiresIn:2000
          })
          /* context.res.cookie("jwt",s,{secure:true,httpOnly:true}) */
          context.pub.publish("USER_ACTIVE",{userActive:u})

          return s
        } else {
          throw new Error(y)
          }
      }
    },
    Subscription:{
      userActive:{
        
        subscribe: (parent,args,{pub}) =>  pub.asyncIterator("USER_ACTIVE"),
        }
      ,
    userAdded:{
        
      subscribe: (parent,args,{pub}) => {  return pub.asyncIterator(["USER_NEW"]) },
      }
    }
    
  };
const server = new ApolloServer({cors:true,
  typeDefs: schema,
  resolvers,
  context:({ req }) => ({ req, pub })

});


/* const httpServer = createServer(app);
server.installSubscriptionHandlers(httpServer); */

/* server.applyMiddleware({ app, path: '/graphql'}) */;
mongoose.connect("mongodb://localhost:27017/dd")
.then(()=>{
  server.listen({ port: 4000 })
}).then(() => {
  console.log('Apollo Server on http://localhost:4000/graphql');
}).catch((err)=>{
     console.log(err)
})

