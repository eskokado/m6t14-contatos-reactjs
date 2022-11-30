import { CardForm } from "../../components/CardForm";
import { ButtonLink } from "../../styles/buttons";
import { GroupInput } from "../../styles/components/GroupInput";
import { Logo } from "../../styles/logo";
import { Typography } from "../../styles/typography";
import { StyledLoginPage } from "./styles";
import logo from "../../assets/Logo.png";
import { GroupInputPassword } from "../../styles/components/GroupInputPassword";

export const LoginPage = () => {
  return (
    <StyledLoginPage>
      <Logo src={logo} alt="Kenzie hub" />
      <CardForm>
        <Typography fonttype="title2" fontcolor="grey0" fontweight="semibody">
          Login
        </Typography>
        <GroupInput
          label="E-mail"
          placeholder="Digite seu e-mail"
          helperMessage="E-mail inválido"
        />
        <GroupInputPassword
          label="Senha"
          placeholder="Digite sua senha"
          helperMessage="Senha inválido"
        />
        <ButtonLink
          buttonstyle="default"
          buttoncolor="primary"
          buttonwidth="max"
        >
          Entrar
        </ButtonLink>
        <Typography fonttype="headline" fontcolor="grey1" fontweight="semibody">
          Ainda não possui uma conta?
        </Typography>
        <ButtonLink
          buttonstyle="default"
          buttoncolor="disabled"
          buttonwidth="max"
        >
          Cadastre-se
        </ButtonLink>
      </CardForm>
    </StyledLoginPage>
  );
};
