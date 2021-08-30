import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Button, TextField, Grid } from "@material-ui/core";
import Home from "./pages/Home";
import "./pages/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/search">
            <h1>This is the search page</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

<Router>
  <Switch>
    <Route></Route>
  </Switch>
</Router>;
