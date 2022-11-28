import React from "react";

export const BaseInput = ({
  type,
  value,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <input
      className={className}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
