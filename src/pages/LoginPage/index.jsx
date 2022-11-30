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

export const LoginPage = () => {
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
  });

  const onSubmitFunction = (data) => console.log(data);

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
        >
          Entrar
        </Button>
        <Typography fonttype="headline" fontcolor="grey1" fontweight="semibody">
          Ainda não possui uma conta?
        </Typography>
        <ButtonLink
          buttonstyle="default"
          buttoncolor="disabled"
          buttonwidth="max"
          to="register"
        >
          Cadastre-se
        </ButtonLink>
      </CardForm>
    </StyledLoginPage>
  );
};
