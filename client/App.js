import React from 'react' ;
import store from './Definition'
import {Provider} from 'react-redux'
import BookCart from './BookCart';


function App() {
  return (
      <Provider store={store}> 
       
          <BookCart />
           
      </Provider>
  )
}

export default App;
