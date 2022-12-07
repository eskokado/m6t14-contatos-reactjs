/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { UnderDevelopment } from "../../components/UnderDevelopment";
import { UserContext } from "../../contexts/UserContext";
import { Container } from "../../styles/container";
import { StyledHomePage } from "./styles";

export const HomePage = () => {
  const { user, onLogout, loading } = useContext(UserContext);

  if (loading) {
    return null;
  }

  return user ? (
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
  ) : (
    <Navigate to="/" />
  );
};
