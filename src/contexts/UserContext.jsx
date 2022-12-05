import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const onLogin = async (data) => {
    try {
      setLoading(true);
      const response = await toast.promise(api.post("sessions", data), {
        pending: "Efetuando login pendente...",
        success: "Login efetuado com sucesso",
      });
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);
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
    setUser({});
    navigate("/login");
  };

  const getUser = async () => {
    const userId = localStorage.getItem("@USERID");
    try {
      const response = await api.get(`users/${userId}`);
      setUser(response.data);
    } catch (error) {
      const notify = () => toast.error("Erro ao localizar o usuário");
      notify();
      setUser({});
    }
  };

  const autoLogin = async () => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      try {
        const response = await api.get("/profile", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          setUser(response.data);
        }
      } catch (error) {
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
      }
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
        autoLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
