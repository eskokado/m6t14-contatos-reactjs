import React from "react";

export const BaseButton = ({
  type = "button",
  className,
  children,
  onClick,
}) => {
  return (
    <>
      <button type={type} className={className} onClick={onClick}>
        {children}
      </button>
    </>
  );
};
