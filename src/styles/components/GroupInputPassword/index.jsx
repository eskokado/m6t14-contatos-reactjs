import { InputPassword } from "../../../components/InputPassword";
import { Typography } from "../../typography";
import { StyledGroupInputPassword } from "./styles";

export const GroupInputPassword = ({ label, placeholder, helperMessage }) => {
  return (
    <StyledGroupInputPassword>
      <Typography fonttype="headline" fontcolor="grey0">
        {label}
      </Typography>
      <InputPassword placeholder={placeholder} />
      {helperMessage ? (
        <Typography fonttype="helper" fontcolor="grey0">
          {helperMessage}
        </Typography>
      ) : (
        ""
      )}
    </StyledGroupInputPassword>
  );
};
