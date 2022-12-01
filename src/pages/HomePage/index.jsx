/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { UnderDevelopment } from "../../components/UnderDevelopment";
import { api } from "../../services/api";
import { Container } from "../../styles/container";
import { StyledHomePage } from "./styles";

export const HomePage = (props) => {
  const userId = localStorage.getItem("@USERID");

  const [user, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    if (userId === null) {
      navigate("/login");
    } else {
      getUser();
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    navigate("/login");
  };

  const getUser = async () => {
    try {
      const response = await api.get(`users/${userId}`);
      setUser(response.data);
    } catch (error) {
      const notify = () => toast.error("Erro ao localizar o usuário");
      notify();
      setUser({});
    }
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
          <Header user={user} />
        </Container>
      </section>
      <Container>
        <UnderDevelopment />
      </Container>
    </StyledHomePage>
  );
};
