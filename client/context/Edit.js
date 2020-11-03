import React,{useState} from 'react' ;
import {pcontext} from './Provider'
function Edit() {
  const [username, setusername] = useState('')
  const [name, setname] = useState('')
  const [age, setage] = useState(0)
  const [profession, setprofession] = useState('')
  const [adresse, setadresse] = useState('')
  const v = React.useContext(pcontext)
 
  const Hello=(e)=>{
  e.preventDefault()
  v.setprofile({
    username:username,
    name:name,
    age:age,
    profession:profession,
    adresse:adresse
  })

 }
  return (
      <div>
       <form onSubmit={Hello}>
         <input type="text" name="username" value={username} onChange={(e)=> setusername(e.target.value)}/>
         <input type="text" name="name" value={name} onChange={(e)=> setname(e.target.value)} />
         <input type="number" name="age" value={age} onChange={(e)=> setage(e.target.value)}/>
         <input type="text" name="profession" value={profession} onChange={(e)=> setprofession(e.target.value)}/>
         <input type="text" name="adresse" value={adresse} onChange={(e)=> setadresse(e.target.value)} />
         <button type="submit">
           submit
         </button>
       </form>
            
      </div>
  )
}

export default Edit;
