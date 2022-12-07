import { Typography } from "../../../../styles/typography";
import { StyledCardTechnology } from "./styles";
import { FaTrash } from "react-icons/fa";
import { Button } from "../../../../styles/buttons";

export const CardTechnology = ({ tech }) => {
  return (
    <StyledCardTechnology>
      <Typography fonttype="title3" fontcolor="grey0">
        {tech.title}
      </Typography>
      <Button buttonstyle="icon" buttoncolor="grey">
        <FaTrash />
      </Button>
    </StyledCardTechnology>
  );
};
