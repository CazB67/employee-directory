import React from "react";

function TableWrapper(props) {
    return (
        <div className="table-responsive">
        <table className="table table-hover table-dark table-responsive-sm">{props.children}
        </table>
        </div>
    );
  }

export default TableWrapper;