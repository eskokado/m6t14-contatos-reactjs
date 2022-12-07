import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Typography } from "../../styles/typography";
import { StyledHeader } from "./styles";

export const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <StyledHeader>
      <Typography fonttype="title1" fontcolor="grey0">
        Olá, {user.name}
      </Typography>
      <Typography fonttype="headline" fontweight="bold" fontcolor="grey1">
        {user.course_module}
      </Typography>
    </StyledHeader>
  );
};
