import { Typography } from "../../../../styles/typography";
import { StyledEmptyTechnology } from "./styles";

export const EmptyTechnology = () => {
  return (
    <StyledEmptyTechnology>
      <Typography fonttype="title1" fontcolor="grey0" fontweight="body">
        Sem tecnologia :(
      </Typography>
    </StyledEmptyTechnology>
  );
};
