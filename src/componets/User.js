// src/components/User.js
import React from "react";

function User(props) {
  return (
    <div>
      <h2 style={{ backgroundColor: props.theColor }}>
        Hello, {props.firstName}
      </h2>
      <img src={props.image} alt="" width="350" height="350"/>
      <h2>{props.bootcampName}</h2>
    </div>
  );
}

export default User;