import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./component/Login"
import Signup from "./component/Signup"
import Home from "./component/Home"
import Add from "./component/Add"
import Company from "./component/Company"
import Search from "./component/Search"




function App() {
  return (
  <Router>
    <div className='app'>
    

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>

        <Route path="/Login" component={Login}/>
        <Route path="/Signup" component={Signup}/>
        <Route path="/Home" component={Home}/>
        <Route path="/c/:id"  component={Company}/>
        <Route path="/Add" component={Add}/>
        <Route path="/Search" component={Search}/>

      </Switch>



    </div>
  </Router>
    
  );
}

export default App;
