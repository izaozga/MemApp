import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HotMems from "./pages/HotMems";
import Mems from "./pages/Mems";
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
            <Redirect to="/Mems" />
            </Route>
            <Route path="/Mems">
                <Mems />
              </Route>
              <Route path="/HotMems">
                <HotMems />
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
