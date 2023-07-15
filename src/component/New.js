import React from "react";

function New(props) {
  let color = true;
  return color ? (
    <ul>
      {props.fruits.map((el, i) => (
        <li className={props.color[i]}>{el}</li>
      ))}
    </ul>
  ) : (
    <ul>
      {props.fruits.map((el, i) => (
        <li>{el}</li>
      ))}
    </ul>
  );
}

export default New;
