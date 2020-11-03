import React from 'react' ;
import {connect} from "react-redux";
import EditBook from './EditBook';
import {getposts} from './Actions'

function BookCart(props) {
  props.getposts();
  return (
      <div> 
        {!props.state.err?
          props.state.map(a=>
           (
              <div>
                        <h1>{a.title}</h1>
                        <EditBook {...a} />
              </div>
           ) 
            ): props.state.err
        }

      </div>
  )
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getposts: () => {
      dispatch(getposts())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BookCart);