import { StyledInput } from "../../inputs";
import { Typography } from "../../typography";
import { StyledGroupInput } from "./styles";

export const GroupInput = ({ label, placeholder, helperMessage }) => {
  return (
    <StyledGroupInput>
      <Typography fonttype="headline" fontcolor="grey0">
        {label}
      </Typography>
      <StyledInput placeholder={placeholder} />
      {helperMessage ? (
        <Typography fonttype="helper" fontcolor="grey0">
          {helperMessage}
        </Typography>
      ) : (
        ""
      )}
    </StyledGroupInput>
  );
};
