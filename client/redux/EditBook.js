import React from 'react' ;
import {connect} from "react-redux";
import {edit} from './Actions'

function EditBook(props) {
    const [titre, settitre] = React.useState('')
    const [langue, setlangue] = React.useState('');


    const handleValues=(name,e)=>{
            if (name==="titre") {
                settitre(e)
            } else {
                setlangue(e)
            }
    }
    const submit=(e)=>{
         e.preventDefault();
        props.edit(titre,langue)
    }
   return(
       <div>
           <form onSubmit={submit}>
               <input type="text" name="titre"
                value={titre}
                onChange={(e)=> handleValues("titre",e.target.value)}
               />
               <input type="text" name="langue"
               value={langue}
               onChange={(e)=> handleValues("langue",e.target.value)}
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
        edit: (titre,langue) => {
            dispatch(edit(titre,langue))
        }
    }
}
export default connect(null, mapDispatchToProps)(EditBook)