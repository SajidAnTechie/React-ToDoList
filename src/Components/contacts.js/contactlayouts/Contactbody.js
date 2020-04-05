import React from "react";

const contactbody = props => {
  return (
    <div className="card-body">
      <ul className="lst-group">
        <li className="list-group-item">Gmail: {props.email}</li>
        <li className="list-group-item">Phone: {props.phone}</li>
      </ul>
    </div>
  );
};
export default contactbody;
