// Untouched bootstrap nav code
import React from "react";
import "./Navbar.css";


const Navbar = props => (

  <div>
    {/* jumbotron */}
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-5">Memory Game</h1>
        <p className="lead">Play this game ans test your memory. All you have to do is make sure you don't click the same character twice.. Good Luck!</p>
      </div>
    </div>
     {/* navbar */}
    <div className="navbar navbar-light bg-light sticky-nav">
      <a className="navbar-brand nav-restart" href="/">Restart</a>
      <div className="status" >Current Score: {props.current}</div>
      <div className="status" >High Score: {props.high}</div>

    </div>

  </div>
);

export default Navbar;