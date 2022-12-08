import { Typography } from "../../../../styles/typography";
import { StyledCardTechnology } from "./styles";
import { FaTrash } from "react-icons/fa";
import { Button } from "../../../../styles/buttons";
import { useContext } from "react";
import { TechContext } from "../../../../contexts/TechContext";

export const CardTechnology = ({ tech }) => {
  const { onRemoveTech } = useContext(TechContext);
  return (
    <StyledCardTechnology>
      <Typography fonttype="title3" fontcolor="grey0">
        {tech.title}
      </Typography>
      <Button
        buttonstyle="icon"
        buttoncolor="grey"
        onClick={() => onRemoveTech(tech.id)}
      >
        <FaTrash />
      </Button>
    </StyledCardTechnology>
  );
};
