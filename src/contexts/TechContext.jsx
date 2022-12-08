/* eslint-disable no-use-before-define */
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext();

export const TechProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [techs, setTechs] = useState([]);
  const [showTechModal, setShowTechModal] = useState(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    setTechs(user?.techs ? user.techs : []);
  }, [user]);

  const onCreateTech = async (data) => {
    setLoading(true);
    const token = localStorage.getItem("@TOKEN");
    api.defaults.headers.common.authorization = `Beader ${token}`;
    try {
      await toast.promise(api.post("/users/techs", data), {
        pending: "Salvando a tecnologia",
        success: "Tecnologia salvo com sucesso!",
      });
      const response = await api.get("/profile");
      setTechs(response.data.techs);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const onRemoveTech = async (id) => {
    setLoading(true);
    const token = localStorage.getItem("@TOKEN");
    api.defaults.headers.common.authorization = `Beader ${token}`;
    try {
      await toast.promise(api.delete(`/users/techs/${id}`), {
        pending: "Deletando a tecnologia",
        success: "Tecnologia deletado com sucesso!",
      });
      const response = await api.get("/profile");
      setTechs(response.data.techs);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <TechContext.Provider
      value={{
        showTechModal,
        setShowTechModal,
        onCreateTech,
        loading,
        onRemoveTech,
        techs,
        setTechs,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
