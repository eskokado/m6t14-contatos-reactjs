import React from "react";

export const BaseFont = (props) => {
  return (
    <>
      {props.title1 && <h1 className={props.className}>{props.children}</h1>}
      {props.title2 && <h2 className={props.className}>{props.children}</h2>}
      {props.title3 && <h3 className={props.className}>{props.children}</h3>}
      {props.headline && <p className={props.className}>{props.children}</p>}
      {props.helper && (
        <span className={props.className}>{props.children}</span>
      )}
    </>
  );
};
