import React from 'react' ;
import store from './Definition'
import {Provider} from 'react-redux'
import BookCart from './BookCart';
import EditBook from './EditBook';


function App() {
  return (
      <Provider store={store}> 
       
          <BookCart />
          <EditBook />
      </Provider>
  )
}

export default App;
