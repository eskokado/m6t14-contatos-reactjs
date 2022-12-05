/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { UnderDevelopment } from "../../components/UnderDevelopment";
import { UserContext } from "../../contexts/UserContext";
import { Container } from "../../styles/container";
import { StyledHomePage } from "./styles";

export const HomePage = () => {
  const { user, onLogout, autoLogin } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const mountAutoLogin = async () => {
      await autoLogin();
    };
    mountAutoLogin();
    const userId = localStorage.getItem("@USERID");
    if (userId === null) {
      navigate("/login");
    }
  }, []);

  return (
    <StyledHomePage>
      <section>
        <Container>
          <Navbar labelButton="Sair" onClick={onLogout} />
        </Container>
      </section>
      <section>
        <Container>
          <Header user={user} />
        </Container>
      </section>
      <Container>
        <UnderDevelopment />
      </Container>
    </StyledHomePage>
  );
};
