
import {useState} from 'react'
import {useQuery,gql,useMutation, useSubscription} from '@apollo/client'
import cookie from 'react-cookies'

const USER_ACTIVE=gql`
subscription userActive{
  userActive
}
`;
const USER_ADDED=gql`
subscription {
  userAdded{username}
}
`;

const GET_USER=gql`{
  g{
    username
  }
}`;
const LOGIN=gql`
 mutation login($u:String,$p:String){
  login(u:$u,p:$p)
 }
`;
const REGISTER=gql`
  mutation register($u:String,$p:String){
    register(u:$u,p:$p){
      username
    }
  } 
`;

function App() {
  /* ,{
    onCompleted({register}){
      localStorage.setItem("token",register)
    }
  } */
   const [username, setusername] = useState("")
   const [password, setpassword] = useState("")
   const {  u,n,userAdded } = useSubscription(USER_ADDED);
  const [register,{loading1,error1}]=useMutation(REGISTER,{
    update(proxy,result){
      
      const data=proxy.readQuery({
        query: GET_USER
      })
      data.g = [...data.g,result.data.register]
      console.log("dd ",data.g)

      proxy.writeQuery({
        query: GET_USER,data
      })

    },
    
  })
 const [login,{loading2,error2}]=useMutation(LOGIN,{
  
  onCompleted({login}){
   
    cookie.save("token",login,{secure: true,
      httpOnly: true})
  }
 })

  const {data,load,error}=useQuery(GET_USER)
  const HandleValue=(event)=>{
    event.preventDefault()
     register({variables:{u:username
                         ,p:password}})

  }
  const LValue=(event)=>{
    event.preventDefault()
    login({variables:{u:username
                        ,p:password}})
  }
  return (
    <div style={{margin:62}}>
      {
        load?(<p>loading</p>):error?(<p>loading</p>):data?data.g.map(
          (d,index)=>{
            
            return (<p key={index}>{d.username}</p>)
          }
        ):'vv'

      }
      <form >
        <input style={{display:"block",margin:12}} type="text" name="username" 
         onChange={(e)=>setusername(e.target.value)}
        />
        <input type="password" name="password"
        onChange={(e)=>setpassword(e.target.value)}
        />
        
        <button type="submit" onClick={HandleValue}>
          register
        </button>

        <button type="submit" onClick={LValue}>
          login
        </button>

      </form>
     {
       n? "loaded": userAdded
     }
     {/*  {value} */}
    </div>
  );
}

export default App;
