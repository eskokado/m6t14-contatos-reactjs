import { useContext } from "react";
import { TechContext } from "../../../../contexts/TechContext";
import { Container } from "../../../../styles/container";
import { FormTechnologyModal } from "../FormTechnologyModal";
import { StyledModalWrapper } from "../FormTechnologyModal/styles";
import { MainContent } from "../MainContent";
import { MainTop } from "../MainTop";
import { StyledMainHome } from "./styles";

export const MainHome = () => {
  const { showTechModal } = useContext(TechContext);
  return (
    <>
      <StyledMainHome>
        <section>
          <Container>
            <MainTop />
            <MainContent />
          </Container>
        </section>
      </StyledMainHome>
      {showTechModal && (
        <StyledModalWrapper>
          <FormTechnologyModal></FormTechnologyModal>
        </StyledModalWrapper>
      )}
    </>
  );
};
