import { BrowserRouter as Router, Switch, Redirect, Route, Link } from "react-router-dom";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Home from "./component/Home";
import Add from "./component/Add";
import Company from "./component/Company";
import Search from "./component/Search";
import SearchResult from "./component/SearchResult";
import Range from "./component/Range";

function App() {
  return (
    <Router>
      
      <div className="app">
        
        <Switch>
       
          {/* Login */}
          <Route path="/Login" component={Login} />
          
          {/* Create Account */}
          <Route path="/Signup" component={Signup} />
          
          {/* All Restaurants */}
          <Route path="/Home" component={Home} />
          
          {/* Single Restaurant */}
          <Route path="/c/:id" component={Company} />
          
          {/* Add Restaurant */}
          <Route path="/Add" component={Add} />
          
          {/* Discover */}
          <Route path="/Search" component={Search} />
          
          {/* Search Result By Food Name */}
          <Route path="/name/:keyword" component={SearchResult} />
          
          {/* Search Result By Food Type */}
          <Route path="/catagory/:keyword" component={SearchResult} />

          {/* Search Result By Food Hashtag */}
          <Route path="/tag/:keyword" component={SearchResult} />
       
          {/* Filter Result By Food Price */}
          <Route path="/range" component={Range} />
       
          <Redirect from="/" exact to="/home" />

        </Switch>

      </div>

    </Router>
  );
}

export default App;
