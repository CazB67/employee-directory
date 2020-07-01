import React from "react";
import "./style.css";

  function SearchBox(props) {
  return <div><input className="mb-3 mt-3 text-center" onChange={props.filterEvent} placeholder="Search"></input>
            </div>
}

export default SearchBox;