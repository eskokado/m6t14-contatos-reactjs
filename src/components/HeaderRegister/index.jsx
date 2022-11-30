import { Button, ButtonLink } from "../../styles/buttons";
import logo from "../../assets/Logo.png";
import { Logo } from "../../styles/logo";
import { StyledHeaderRegister } from "./styles";

export const HeaderRegister = () => {
  return (
    <StyledHeaderRegister>
      <Logo src={logo} />
      <Button buttoncolor="grey" buttonstyle="small" fontSize="min">
        Voltar
      </Button>
    </StyledHeaderRegister>
  );
};
