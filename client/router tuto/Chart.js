import {withRouter} from 'react-router';

function Chart(props) {
    return (<div>
      {props.match.params.id}
    </div>)
  }
  export default withRouter(Chart);