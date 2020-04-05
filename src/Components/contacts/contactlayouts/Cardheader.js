import React from "react";
import Classes from "./Cardheader.css";
const cardheader = (props) => {
  return (
    <div className="card" className={Classes.card}>
      <div
        className="card-header"
        style={{
          backgroundColor: "blue",
          color: "white",
          fontWeight: "bold",
          fontSize: "26px",
        }}
      >
        <i
          className={
            props.iconshape
            /*this.state.ishide ? "fas fa-arrow-up" : "fas fa-arrow-down"*/
          }
          onClick={props.hideshow}
          style={{ marginRight: "15px", cursor: "pointer" }}
        ></i>
        {props.name}
        <div style={{ float: "right" }}>
          <i
            className="fas fa-edit"
            onClick={props.handleEditing}
            style={{ marginRight: "20px" }}
          ></i>
          <i className="fas fa-trash" onClick={props.handleDelete}></i>
          {/* <i
              className="fas fa-trash"
              onClick={()=>this.props.delete(this.props.contact.id)}
            ></i> */}
        </div>
      </div>
      {props.cardbody}
    </div>
  );
};
export default cardheader;
