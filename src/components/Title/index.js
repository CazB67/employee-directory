import React from "react";
import "./style.css";

function Title(props) {
  return <h1 className="title p-5 mt-5 text-center">{props.children}</h1>;
}

export default Title;
