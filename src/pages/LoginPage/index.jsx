import { CardForm } from "../../components/CardForm";
import { Button } from "../../styles/buttons";
import { GroupInput } from "../../styles/components/GroupInput";
import { Logo } from "../../styles/logo";
import { Typography } from "../../styles/typography";
import { StyledLoginPage } from "./styles";
import logo from "../../assets/Logo.png";

export const LoginPage = () => {
  return (
    <StyledLoginPage>
      <Logo src={logo} alt="Kenzie hub" />
      <CardForm>
        <Typography title2 grey0 semibody>
          Login
        </Typography>
        <GroupInput
          label="E-mail"
          placeholder="Digite seu e-mail"
          helperMessage="E-mail inválido"
        />
        <GroupInput
          label="Senha"
          placeholder="Digite sua senha"
          helperMessage="Senha inválido"
        />
        <Button default primary max>
          Entrar
        </Button>
        <Typography headline grey1 semibody>
          Ainda não possui uma conta?
        </Typography>
        <Button default disabled max>
          Cadastre-se
        </Button>
      </CardForm>
    </StyledLoginPage>
  );
};
