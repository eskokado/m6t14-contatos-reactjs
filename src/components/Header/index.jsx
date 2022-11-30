import { Typography } from "../../styles/typography";
import { StyledHeader } from "./styles";

export const Header = (props) => {
  return (
    <StyledHeader>
      <Typography fonttype="title1" fontcolor="grey0">
        Olá, Edson Shideki Kokado
      </Typography>
      <Typography fonttype="headline" fontweight="bold" fontcolor="grey1">
        Primeiro módulo (Introdução ao Frontend)
      </Typography>
    </StyledHeader>
  );
};
