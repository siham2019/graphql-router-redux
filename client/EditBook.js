import React from 'react' ;
import {connect} from "react-redux";
import {edit} from './Actions'

function EditBook(props) {
    const [titre, settitre] = React.useState(props.title)
  
     console.log("props : ", props.id)
     console.log("titre : ", titre)

    const handleValues=(e)=>{
          settitre(e)
    }
    const submit=(e)=>{
         e.preventDefault();
        props.edit(titre,props.id)
        console.log("2 titre : ", titre)

    }
   return(
       <div>
           <form onSubmit={submit}>
               <input type="text" name="titre"
                value={titre}
                onChange={(e)=> handleValues(e.target.value)}
               />
              
                 <button>
                  submit  
                 </button> 
           </form>
       </div>
   );
}
const mapDispatchToProps = (dispatch) => {
    return {
        edit: (titre,index) => {
            dispatch(edit(titre,index))
        }
    }
}

export default connect(null, mapDispatchToProps)(EditBook)