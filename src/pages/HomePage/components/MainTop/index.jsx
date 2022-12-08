import { Button } from "../../../../styles/buttons";
import { Typography } from "../../../../styles/typography";
import { StyledMainTop } from "./styles";
import { FaPlus } from "react-icons/fa";
import { useContext } from "react";
import { TechContext } from "../../../../contexts/TechContext";

export const MainTop = () => {
  const { setShowTechModal } = useContext(TechContext);
  const handleShowModal = () => {
    setShowTechModal(true);
  };

  return (
    <>
      <StyledMainTop>
        <Typography fontweight="semibold" fontcolor="grey0" fonttype="title2">
          Tecnologia
        </Typography>
        <Button buttonstyle="icon" buttoncolor="grey" onClick={handleShowModal}>
          <FaPlus />
        </Button>
      </StyledMainTop>
    </>
  );
};
