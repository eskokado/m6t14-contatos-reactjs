import { StyledInput } from "../../inputs";
import { Typography } from "../../typography";
import { StyledGroupInput } from "./styles";

export const GroupInput = ({ label, placeholder, helperMessage }) => {
  return (
    <StyledGroupInput>
      <Typography headline grey0>
        {label}
      </Typography>
      <StyledInput placeholder={placeholder} />
      {helperMessage ? (
        <Typography helper grey0>
          {helperMessage}
        </Typography>
      ) : (
        ""
      )}
    </StyledGroupInput>
  );
};
