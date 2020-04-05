import React from "react";

const editform = props => {
  const { nameerror, emailerror, phoneerror } = props.error;

  return (
    <div className="card w-50 mt-5 mx-auto">
      <div className="card-header">
        <h2>Edit Contact Form</h2>
      </div>
      <div className="card-body">
        <form method="POST" onSubmit={props.submit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              onChange={props.change}
              value={props.name}
              className="form-control"
              placeholder="write a name"
            ></input>
            <span style={{ color: "red" }}>{nameerror}</span>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              onChange={props.change}
              value={props.email}
              name="email"
              placeholder="write a eamil"
            ></input>
            <span style={{ color: "red" }}>{emailerror}</span>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              onChange={props.change}
              name="phone"
              value={props.phone}
              className="form-control"
              placeholder="write a number"
            ></input>
            <span style={{ color: "red" }}>{phoneerror}</span>
          </div>
          <button type="submit" className="btn btn-primary">
            Edit
          </button>
        </form>
      </div>
    </div>
  );
};
export default editform;
