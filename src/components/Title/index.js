import React from "react";
import "./style.css";

function Title(props) {
  return <nav className="navbar">
  <span className="navbar-brand mx-auto mb-0 p-3 h1">{props.children}</span>
</nav>;
}

export default Title;
