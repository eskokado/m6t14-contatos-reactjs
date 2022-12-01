import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { UnderDevelopment } from "../../components/UnderDevelopment";
import { Container } from "../../styles/container";
import { StyledHomePage } from "./styles";

export const HomePage = (props) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    navigate("/login");
  };
  return (
    <StyledHomePage>
      <section>
        <Container>
          <Navbar labelButton="Sair" onClick={logout} />
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
