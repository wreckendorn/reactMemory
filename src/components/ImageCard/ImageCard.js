import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
  <div className="card ml-5">
    <div className="m-3 img-container img-fluid max-width: 100% height: auto">
      <img alt={props.name} id={props.id} src={props.image} clicked={2} onClick={() => props.handleIncrement(props)}/>
    </div>
  </div>
);

export default ImageCard;
