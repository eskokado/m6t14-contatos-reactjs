import { CardForm } from "../../components/CardForm";
import { Navbar } from "../../components/Navbar";
import { Button } from "../../styles/buttons";
import { GroupInput } from "../../components/GroupInput";
import { GroupInputPassword } from "../../components/GroupInputPassword";
import { Typography } from "../../styles/typography";
import { StyledRegisterPage } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { GroupSelect } from "../../components/GroupSelect";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const RegisterPage = () => {
  const { loading, onRegister } = useContext(UserContext);
  const passwordRegExp =
    /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    name: yup
      .string()
      .required("Nome obrigatório")
      .min(3, "O nome precisa ter pelo 3 caracteres.")
      .max(200, "O nome pode ter no máximo 200 caracteres."),
    password: yup
      .string()
      .required("Senha obrigatório")
      .matches(
        passwordRegExp,
        "A senha deve conter pelo menos 8 caracteres, uma maiúscula, um número e um caractere especial"
      ),
    confirmPassword: yup
      .string()
      .required("Confirmar a senha é obrigatório")
      .oneOf([yup.ref("password")], "As senhas não coincidem"),
    bio: yup
      .string()
      .required("Bio obrigatório")
      .min(3, "Bio precisa ter pelo 3 caracteres.")
      .max(400, "Bio pode ter no máximo 400 caracteres."),
    contact: yup
      .string()
      .required("Contato obrigatório")
      .min(3, "O contato precisa ter pelo 3 caracteres.")
      .max(200, "O contato pode ter no máximo 200 caracteres."),
    course_module: yup.string().required("Curso modulo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: "onChange",
  });

  return (
    <StyledRegisterPage>
      <Navbar labelButton="Voltar" to="/login" />
      <CardForm onSubmit={handleSubmit(onRegister)}>
        <Typography fonttype="title2" fontcolor="grey0" fontweight="semibody">
          Crie sua conta
        </Typography>
        <Typography fonttype="headline" fontcolor="grey1">
          Rapido e grátis, vamos nessa
        </Typography>
        <GroupInput
          label="Nome"
          placeholder="Digite aqui seu nome"
          helperMessage={errors.name?.message && errors.name.message}
          field="name"
          register={register}
        />
        <GroupInput
          label="Email"
          placeholder="Digite aqui seu email"
          helperMessage={errors.email?.message && errors.email.message}
          field="email"
          register={register}
        />
        <GroupInputPassword
          label="Senha"
          placeholder="Digite sua senha"
          helperMessage={errors.password?.message && errors.password.message}
          field="password"
          register={register}
        />
        <GroupInputPassword
          label="Confirmar senha"
          placeholder="Digite novamente sua senha"
          field="confirmPassword"
          helperMessage={
            errors.confirmPassword?.message && errors.confirmPassword.message
          }
          register={register}
        />
        <GroupInput
          label="Bio"
          placeholder="Fale sobre você"
          helperMessage={errors.bio?.message && errors.bio.message}
          field="bio"
          register={register}
        />
        <GroupInput
          label="Contato"
          placeholder="Opção de contato"
          helperMessage={errors.contact?.message && errors.contact.message}
          field="contact"
          register={register}
        />
        <GroupSelect
          label="Selecionar módulo"
          placeholder="Seleciona um módulo"
          helperMessage={
            errors.course_module?.message && errors.course_module.message
          }
          field="course_module"
          register={register}
        />
        <Button
          type="submit"
          buttonstyle="default"
          buttoncolor="primaryDisable"
          buttonwidth="max"
          disabled={loading}
        >
          {loading ? "Cadastrando..." : "Cadastrar"}
        </Button>
      </CardForm>
    </StyledRegisterPage>
  );
};
