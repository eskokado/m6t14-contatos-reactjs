import React from "react";

export const BaseFont = (props) => {
  return (
    <>
      {props.name === "title1" && (
        <h1 className={props.className}>{props.children}</h1>
      )}
      {props.name === "title2" && (
        <h2 className={props.className}>{props.children}</h2>
      )}
      {props.name === "title3" && (
        <h3 className={props.className}>{props.children}</h3>
      )}
      {props.name === "headline" && (
        <p className={props.className}>{props.children}</p>
      )}
    </>
  );
};
