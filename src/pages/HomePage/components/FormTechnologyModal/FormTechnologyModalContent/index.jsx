import { GroupInput } from "../../../../../components/GroupInput";
import { StyledFormTechnologyModalContent } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { GroupSelect } from "../../../../../components/GroupSelect";
import { Button } from "../../../../../styles/buttons";
import { useContext } from "react";
import { TechContext } from "../../../../../contexts/TechContext";

export const FormTechnologyModalContent = () => {
  const { loading, onCreateTech, setShowTechModal } = useContext(TechContext);

  const formSchema = yup.object().shape({
    title: yup.string().required("Título é obrigatório"),
    status: yup.string().required("Nível é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: "onChange",
  });

  const onSubmitFunction = (data) => {
    onCreateTech(data);
    setShowTechModal(false);
  };

  return (
    <StyledFormTechnologyModalContent onSubmit={handleSubmit(onSubmitFunction)}>
      <GroupInput
        label="Título"
        placeholder="Digite aqui o título"
        helperMessage={errors.title?.message && errors.title.message}
        field="title"
        register={register}
      />
      <GroupSelect
        label="Selecionar status"
        placeholder="Seleciona um status"
        helperMessage={errors.status?.message && errors.status.message}
        field="status"
        register={register}
      >
        <option value="">Seleciona um status</option>
        <option>Iniciante</option>
        <option>Intermediário</option>
        <option>Avançado</option>
      </GroupSelect>
      <Button
        type="submit"
        buttoncolor="primary50"
        buttonwidth="max"
        buttonstyle="default"
        disabled={loading}
      >
        {loading ? "Cadastrando..." : "Cadastrar Tecnologia"}
      </Button>
    </StyledFormTechnologyModalContent>
  );
};
