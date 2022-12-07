import { Container } from "../../../../styles/container";
import { MainContent } from "../MainContent";
import { MainTop } from "../MainTop";
import { StyledMainHome } from "./styles";

export const MainHome = () => {
  return (
    <StyledMainHome>
      <section>
        <Container>
          <MainTop />
          <MainContent />
        </Container>
      </section>
    </StyledMainHome>
  );
};
