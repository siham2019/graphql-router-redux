import React from 'react' ;
import {connect} from "react-redux";

function BookCart(props) {
  
  return (
      <div> 
        <h1>{props.state.Titre}</h1>
        <p><small>{props.state.Date_de_création}</small></p>
        <p>{props.state.Langue}</p>
      </div>
  )
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

export default connect(mapStateToProps,null)(BookCart);