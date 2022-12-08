import { useContext } from "react";
import { TechContext } from "../../../../../contexts/TechContext";
import { Button } from "../../../../../styles/buttons";
import { Typography } from "../../../../../styles/typography";
import { StyledFormTechnologyModalHeader } from "./styles";

export const FormTechnologyModalHeader = () => {
  const { setShowTechModal } = useContext(TechContext);
  return (
    <StyledFormTechnologyModalHeader>
      <Typography fonttype="title3" fontcolor="grey0" fontweight="semibold">
        Cadastrar Tecnologia
      </Typography>
      <Button buttoncolor="grey1" onClick={() => setShowTechModal(false)}>
        X
      </Button>
    </StyledFormTechnologyModalHeader>
  );
};
