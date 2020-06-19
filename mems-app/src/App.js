import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PopularneMemy from "./pages/PopularneMemy";
import Memy from "./pages/Memy";
import Navbar from "./pages/Navbar";
import Page404 from "./pages/Page404";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
        <Navbar />
          <div className="Routes">
            <Switch>
            <Route exact path="/">
            <Redirect to="/Memy" />
            </Route>
            <Route path="/Memy">
                <Memy />
              </Route>
              <Route path="/PopularneMemy">
                <PopularneMemy />
              </Route>
              <Route path="*">
                <Page404 />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
        




export default App;
