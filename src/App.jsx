import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {} from "react-bootstrap";
import "./App.css";
import FirstPage from "./Components/FirstPage";
import SecondPage from "./Components/SecondPage";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="d-flex justify-content-center align-items-center allPage">
          <FirstPage />
          <Switch>
            <Route exact path="/"></Route>
            <Route path="/about"></Route>
            <Route path="/dashboard"></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
