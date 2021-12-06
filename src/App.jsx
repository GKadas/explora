import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Button, TextField, Grid } from "@material-ui/core";
import Home from "./pages/Home";
import "./pages/Search";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
