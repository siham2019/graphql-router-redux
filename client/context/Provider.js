import React from 'react' 


export const pcontext=React.createContext()
function Provider(props) {
  const [profile, setprofile] = React.useState({
    username:'',
    name:'',
    age:0,
    profession:'',
    adresse:''
  })
  return (
      <pcontext.Provider value={{profile,setprofile}}>
      {props.children}
      </pcontext.Provider>
       
  )
}

export default Provider;
