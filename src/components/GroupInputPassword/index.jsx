import { InputPassword } from "../InputPassword";
import { Typography } from "../../styles/typography";
import { StyledGroupInputPassword } from "./styles";

export const GroupInputPassword = ({
  label,
  placeholder,
  helperMessage,
  register,
}) => {
  return (
    <StyledGroupInputPassword>
      <Typography fonttype="headline" fontcolor="grey0">
        {label}
      </Typography>
      <InputPassword placeholder={placeholder} {...register} />
      {helperMessage && (
        <Typography fonttype="helper" fontcolor="negative">
          {helperMessage}
        </Typography>
      )}
    </StyledGroupInputPassword>
  );
};
