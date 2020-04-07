import React from "react";
import Classes from "./Cardheader.module.css";

const cardheader = (props) => {
  let card = ["card", Classes.cardheader];
  let cardtopheader = ["card-header", Classes.cardtopheader];
  let iconshape = [props.iconshape, Classes.iconshape];
  let editicon = ["fas fa-edit", Classes.editicon];
  return (
    <div className={card.join(" ")}>
      <div className={cardtopheader.join(" ")}>
        <i
          className={
            iconshape.join(" ")

            /*this.state.ishide ? "fas fa-arrow-up" : "fas fa-arrow-down"*/
          }
          onClick={props.hideshow}
        ></i>
        {props.name}
        <div className={Classes.editsection}>
          <i className={editicon.join(" ")} onClick={props.handleEditing}></i>
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
