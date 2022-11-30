import { Button, ButtonLink } from "../../styles/buttons";
import logo from "../../assets/Logo.png";
import { Logo } from "../../styles/logo";
import { StyledNavbar } from "./styles";

export const Navbar = ({ labelButton }) => {
  return (
    <StyledNavbar>
      <Logo src={logo} />
      <Button buttoncolor="grey" buttonstyle="small" fontSize="min">
        {labelButton}
      </Button>
    </StyledNavbar>
  );
};
