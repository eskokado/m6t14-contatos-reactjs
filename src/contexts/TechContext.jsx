/* eslint-disable no-use-before-define */
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext();

export const TechProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [tech, setTech] = useState(null);
  const [techs, setTechs] = useState([]);
  const [showTechModal, setShowTechModal] = useState(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    api.defaults.headers.common.authorization = `Beader ${token}`;
  }, []);

  useEffect(() => {
    setTechs(user?.techs ? user.techs : []);
  }, [user]);

  const onCreateTech = async (data) => {
    setLoading(true);
    try {
      await toast.promise(api.post("/users/techs", data), {
        pending: "Salvando a tecnologia",
        success: "Tecnologia salvo com sucesso!",
      });
      const response = await api.get("/profile");
      setTechs(response.data.techs);
    } catch (error) {
      const notify = () => toast.error("Ocorreu um erro ao cadastrar");
      notify();
    } finally {
      setLoading(false);
    }
  };

  const onUpdateTech = async (data) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("@TOKEN");
      api.defaults.headers.common.authorization = `Beader ${token}`;
      await toast.promise(api.put(`/users/techs/${tech.id}`, data), {
        pending: "Atualizando a tecnologia",
        success: "Tecnologia alterado com sucesso!",
      });
      const response = await api.get("/profile");
      setTechs(response.data.techs);
    } catch (error) {
      const notify = () => toast.error("Ocorreu um erro ao atualizar");
      notify();
    } finally {
      setLoading(false);
    }
  };

  const onRemoveTech = async (id) => {
    setLoading(true);
    try {
      await toast.promise(api.delete(`/users/techs/${id}`), {
        pending: "Deletando a tecnologia",
        success: "Tecnologia deletado com sucesso!",
      });
      const response = await api.get("/profile");
      setTechs(response.data.techs);
    } catch (error) {
      const notify = () => toast.error("Ocorreu um erro ao deletar");
      notify();
    } finally {
      setLoading(false);
    }
  };

  return (
    <TechContext.Provider
      value={{
        loading,
        showTechModal,
        tech,
        setTech,
        techs,
        setTechs,
        setShowTechModal,
        onCreateTech,
        onUpdateTech,
        onRemoveTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
