import { StyledSelect } from "./styles";

export const Select = ({ placeholder, register, field, children }) => {
  return (
    <StyledSelect placeholder={placeholder} {...register(field)}>
      {children}
    </StyledSelect>
  );
};
