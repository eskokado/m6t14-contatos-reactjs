import { ButtonLink } from "../../styles/buttons";
import logo from "../../assets/Logo.png";
import { Logo } from "../../styles/logo";
import { StyledNavbar } from "./styles";

export const Navbar = ({ labelButton, onClick }) => {
  return (
    <StyledNavbar>
      <Logo src={logo} />
      <ButtonLink
        buttoncolor="grey"
        buttonstyle="small"
        fontSize="min"
        to="login"
      >
        {labelButton}
      </ButtonLink>
    </StyledNavbar>
  );
};
