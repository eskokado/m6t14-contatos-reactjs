import { StyledInput } from "../../styles/inputs";
import { Typography } from "../../styles/typography";
import { Select } from "../Select";
import { StyledGroupInput } from "./styles";

export const GroupSelect = ({
  label,
  placeholder,
  helperMessage,
  field,
  register,
}) => {
  return (
    <StyledGroupInput>
      <Typography fonttype="headline" fontcolor="grey0">
        {label}
      </Typography>
      <Select placeholder={placeholder} register={register} field={field} />
      {helperMessage && (
        <Typography fonttype="helper" fontcolor="negative">
          {helperMessage}
        </Typography>
      )}
    </StyledGroupInput>
  );
};
