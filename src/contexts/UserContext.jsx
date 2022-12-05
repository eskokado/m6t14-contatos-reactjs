import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
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

  return (
    <UserContext.Provider value={{ loading, onLogin }}>
      {children}
    </UserContext.Provider>
  );
};
