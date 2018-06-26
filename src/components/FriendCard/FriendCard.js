import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div onClick={() => {
    return props.clicked(props.id);
  }}>
    <img alt={props.id} src={props.image} />
  </div>
);

export default FriendCard;
