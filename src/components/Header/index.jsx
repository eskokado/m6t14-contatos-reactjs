import { Typography } from "../../styles/typography";
import { StyledHeader } from "./styles";

export const Header = ({ user }) => {
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
