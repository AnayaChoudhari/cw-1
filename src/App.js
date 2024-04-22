import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import Welcome from "./Welcome";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Registration} />
        <Route exact path="/login" component={Login} />
        <Route
          exact
          path="/welcome"
          render={(props) => <Welcome {...props} username="User" />}
        />
      </Switch>
    </Router>
  );
};

export default App;
