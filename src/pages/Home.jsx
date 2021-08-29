import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";

import "../CSS/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/link1">Link1</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/link2">Link2</Link>
          <Link to="/link3">Link3</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home_Body">
        <h1> This is Home</h1>
      </div>
    </div>
  );
}

export default Home;
