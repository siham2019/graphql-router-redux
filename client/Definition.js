import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk'

let store=[]

 const reducer = (state = store , action) => {
    switch (action.type) {

       
        case 'addbooks':
           return action.d
        case 'addFailure': return {err: action.err}
        default:
            return state
    }
}

export default createStore(reducer,store,applyMiddleware(thunk));
