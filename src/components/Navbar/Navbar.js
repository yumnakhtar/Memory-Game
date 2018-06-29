// Untouched bootstrap nav code
import React from "react";
import "./Navbar.css";


const Navbar = props => (

  <div>
    {/* jumbotron */}
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-5">Memory Game</h1>
        <p className="lead">Play this game and test your memory. All you have to do is make sure you don't click the same character twice.. Good Luck!</p>
      </div>
    </div>
     {/* navbar */}
    <div className="navbar navbar-light bg-light sticky-nav">
      <a className="navbar-brand nav-restart" href="/">Restart</a>
      <span className="status navbar-text" >Current Score: {props.current}</span>
      <span className="status navbar-text" >High Score: {props.high}</span>
      <span className="status navbar-text" >Total Attempts: {props.tries}</span>

    </div>

  </div>
);

export default Navbar;