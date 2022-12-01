import { StyledSelect } from "./styles";

export const Select = ({ placeholder, register, field }) => {
  return (
    <StyledSelect placeholder={placeholder} {...register(field)}>
      <option value="">Seleciona um módulo</option>
      <option>1o Módulo - frontend - básico</option>
      <option>2o Módulo - frontend - intermediário</option>
      <option>3o Módulo - frontend - avançado</option>
      <option>4o Módulo - backend - javaScript</option>
      <option>5o Módulo - backend - python</option>
    </StyledSelect>
  );
};
