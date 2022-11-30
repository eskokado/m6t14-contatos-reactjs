import React from "react";

export const BaseButton = ({ className, children, onClick }) => {
  return (
    <>
      <button className={className} onClick={onClick}>
        {children}
      </button>
    </>
  );
};
