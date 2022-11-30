import React, { useState } from "react";
import { StyledInput } from "../../styles/inputs";
import { StyledInputPassword } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const eye = <FontAwesomeIcon icon={faEye} />;

export const InputPassword = ({ value, onChange, placeholder, className }) => {
  const [showPassword, setShowPassword] = useState(false);

  const onShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <StyledInputPassword>
      <StyledInput
        type={showPassword ? "text" : "password"}
        className={className}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <i onClick={onShowPassword}>{eye}</i>
    </StyledInputPassword>
  );
};
