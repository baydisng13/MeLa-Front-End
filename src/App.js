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

        <Route path="/Login">
          <Login />
        </Route>
        
        <Route path="/Signup">
          <Signup />
        </Route>

        <Route path="/Home">
          <Home />
        </Route>

        <Route path="/c/:id">
          <Company />
        </Route>
        
        <Route path="/Add">
          <Add />
        </Route>

        <Route path="/Search">
          <Search />
        </Route>

      </Switch>



    </div>
  </Router>
    
  );
}

export default App;
