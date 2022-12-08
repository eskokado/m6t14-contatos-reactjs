import { Typography } from "../../styles/typography";
import { Select } from "../Select";
import { StyledGroupInput } from "./styles";

export const GroupSelect = ({
  label,
  placeholder,
  helperMessage,
  field,
  register,
  children,
}) => {
  return (
    <StyledGroupInput>
      <Typography fonttype="headline" fontcolor="grey0">
        {label}
      </Typography>
      <Select placeholder={placeholder} register={register} field={field}>
        {children}
      </Select>
      {helperMessage && (
        <Typography fonttype="helper" fontcolor="negative">
          {helperMessage}
        </Typography>
      )}
    </StyledGroupInput>
  );
};
