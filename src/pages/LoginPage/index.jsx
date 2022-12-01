/* eslint-disable react-hooks/rules-of-hooks */
import { CardForm } from "../../components/CardForm";
import { Button, ButtonLink } from "../../styles/buttons";
import { GroupInput } from "../../components/GroupInput";
import { Logo } from "../../styles/logo";
import { Typography } from "../../styles/typography";
import { StyledLoginPage } from "./styles";
import logo from "../../assets/Logo.png";
import { GroupInputPassword } from "../../components/GroupInputPassword";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const passwordRegExp =
    /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha obrigatório")
      .matches(
        passwordRegExp,
        "A senha deve conter pelo menos 8 caracteres, uma maiúscula, um número e um caractere especial"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: "onChange",
  });

  const onSubmitFunction = async (data) => {
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
    <StyledLoginPage>
      <Logo src={logo} alt="Kenzie hub" />
      <CardForm onSubmit={handleSubmit(onSubmitFunction)}>
        <Typography fonttype="title2" fontcolor="grey0" fontweight="semibody">
          Login
        </Typography>
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
        <Button
          type="submit"
          buttonstyle="default"
          buttoncolor="primary"
          buttonwidth="max"
          disabled={loading}
        >
          {loading ? "Entrando..." : "Entrar"}
        </Button>
        <Typography fonttype="headline" fontcolor="grey1" fontweight="semibody">
          Ainda não possui uma conta?
        </Typography>
        <ButtonLink
          buttonstyle="default"
          buttoncolor="disabled"
          buttonwidth="max"
          to="/register"
          disabled={loading}
        >
          Cadastre-se
        </ButtonLink>
      </CardForm>
    </StyledLoginPage>
  );
};
