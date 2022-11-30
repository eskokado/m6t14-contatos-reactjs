import { StyledInput } from "../../styles/inputs";
import { Typography } from "../../styles/typography";
import { StyledGroupInput } from "./styles";

export const GroupInput = ({
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
      <StyledInput placeholder={placeholder} {...register(field)} />
      {helperMessage && (
        <Typography fonttype="helper" fontcolor="negative">
          {helperMessage}
        </Typography>
      )}
    </StyledGroupInput>
  );
};
