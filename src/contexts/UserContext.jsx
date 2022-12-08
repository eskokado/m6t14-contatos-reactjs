/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const autoLogin = async () => {
      setLoading(true);
      const token = localStorage.getItem("@TOKEN");
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const { data } = await api.get("/profile", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
      } catch (error) {
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
      } finally {
        setLoading(false);
      }
    };
    autoLogin();
  }, []);

  const onLogin = async (data) => {
    try {
      setLoading(true);
      const response = await toast.promise(api.post("sessions", data), {
        pending: "Efetuando login pendente...",
        success: "Login efetuado com sucesso",
      });
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);
      setUser(response.data.user);
      const loggedSuccess = () => navigate("/home");
      loggedSuccess();
    } catch (error) {
      const notify = () => toast.error("Falha ao logar!!!");
      notify();
    } finally {
      setLoading(false);
    }
  };

  const onRegister = async (data) => {
    try {
      setLoading(true);
      await toast.promise(api.post("users", data), {
        pending: "Cadastrando novo usuário...",
        success: "Novo usuário cadastrado com sucesso",
      });
      const registeredSuccess = () => navigate("/login");
      registeredSuccess();
    } catch (error) {
      const notify = () => toast.error("Não foi possível cadastrar o usuário");
      notify();
    } finally {
      setLoading(false);
    }
  };

  const onLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUser(null);
    navigate("/login");
  };

  const getUser = async () => {
    setLoading(true);
    const userId = localStorage.getItem("@USERID");
    try {
      const response = await api.get(`users/${userId}`);
      setUser(response.data);
    } catch (error) {
      const notify = () => toast.error("Erro ao localizar o usuário");
      notify();
      setUser({});
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        onLogin,
        onRegister,
        onLogout,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
