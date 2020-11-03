import React from 'react' ;
import Provider from './Provider'
import Edit from './Edit'
import {NavBar} from './Navbar'
function App() {
  return (
      <div>
        <Provider>
           <NavBar />
           <Edit />
        </Provider>
            
      </div>
  )
}

export default App;
