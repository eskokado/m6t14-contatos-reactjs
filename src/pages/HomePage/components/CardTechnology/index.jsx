import { Typography } from "../../../../styles/typography";
import { StyledCardTechnology } from "./styles";
import { FaTrash } from "react-icons/fa";
import { Button } from "../../../../styles/buttons";
import { useContext } from "react";
import { TechContext } from "../../../../contexts/TechContext";

export const CardTechnology = ({ tech }) => {
  const { setShowTechModal, setTech } = useContext(TechContext);
  const handleShowModal = () => {
    setTech(tech);
    setShowTechModal(true);
  };

  return (
    <StyledCardTechnology onClick={handleShowModal}>
      <div>
        <Typography fonttype="title3" fontcolor="grey0">
          {tech.title}
        </Typography>
        <Typography fonttype="headline" fontcolor="grey1">
          {tech.status}
        </Typography>
      </div>
    </StyledCardTechnology>
  );
};
