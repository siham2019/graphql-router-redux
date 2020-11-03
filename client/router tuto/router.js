
import {BrowserRouter,Link,Route,NavLink,Switch, Prompt} from 'react-router-dom'
import Chart from "./Chart";
import "./index.css"
function HomePage() {
  return (<div>
      ddddd
  </div>)
}

function AboutPage(props) {
  return (<div>
       ddfgghff
        <form>
          <Prompt when={props.dirty} message={"are you sure you want do that?"} />
          <input type="text" name="gt" />
          <button type="submit">
            submit
          </button>
        </form>
       </div>)
}


function AboutPageU(props) {
  return (<div>
         userrrrrrrrrrrrrrrrrrr {props.match.params.id}
        <Chart />
         </div>)
}

function NotFound(){
  return (<p>404 not found</p>)
}


function Contacts(props) {
  const redirect=()=>{
      props.history.push("/")
  }
  return (<div>eererrezerzezezef dffedfdfd efeefe

  <button onClick={redirect}>redirect</button>
  </div>)
}
function Artist() {
  return (<p>fart fdazdrezzeze</p>)
}
function App() {
  return (
    <BrowserRouter>
      <div>
         <Link to="/" >home</Link>
         {' '}
         <Link to="/about" >about</Link>
         {' '}
         <Link to="/about/123" >about user</Link>
         {' '}
         <NavLink to="/contacts" activeClassName="h">contacts</NavLink>
         {' '}
         <NavLink to="/artist" activeClassName="h">artist</NavLink>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about/:id"   component={AboutPageU} />
          <Route path="/about" exact   component={AboutPage} />
          <Route path="/contacts"    component={Contacts} />
          <Route path="/artist"    component={Artist} />
          <Route   component={NotFound} />
        </Switch>
    </div>
  </BrowserRouter>
  )
}

export default App;
