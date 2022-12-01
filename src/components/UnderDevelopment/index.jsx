import { Typography } from "../../styles/typography";
import { StyledUnderDevelopment } from "./styles";

export const UnderDevelopment = (props) => {
  return (
    <StyledUnderDevelopment>
      <Typography fonttype="title1" fontcolor="grey0" fontweight="body">
        Que pena! Estamos em desenvolvimento :(
      </Typography>
      <Typography fonttype="headline" fontcolor="grey0">
        Nossa aplicação está em desenvolvimento, em breve teremos novidades
      </Typography>
    </StyledUnderDevelopment>
  );
};
