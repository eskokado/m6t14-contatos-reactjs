import { Button, ButtonLink } from "../../styles/buttons";
import logo from "../../assets/Logo.png";
import { Logo } from "../../styles/logo";
import { StyledNavbar } from "./styles";

export const Navbar = ({ labelButton, to, onClick }) => {
  return (
    <StyledNavbar>
      <Logo src={logo} />
      {to && (
        <ButtonLink
          buttoncolor="grey"
          buttonstyle="small"
          fontSize="min"
          to={to}
        >
          {labelButton}
        </ButtonLink>
      )}
      {onClick && (
        <Button
          buttoncolor="grey"
          buttonstyle="small"
          fontSize="min"
          onClick={onClick}
        >
          {labelButton}
        </Button>
      )}
    </StyledNavbar>
  );
};
