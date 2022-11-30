import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { UnderDevelopment } from "../../components/UnderDevelopment";
import { Container } from "../../styles/container";
import { StyledHomePage } from "./styles";

export const HomePage = (props) => {
  return (
    <StyledHomePage>
      <section>
        <Container>
          <Navbar labelButton="Sair" />
        </Container>
      </section>
      <section>
        <Container>
          <Header />
        </Container>
      </section>
      <Container>
        <UnderDevelopment />
      </Container>
    </StyledHomePage>
  );
};
