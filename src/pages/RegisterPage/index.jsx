import { CardForm } from "../../components/CardForm";
import { Navbar } from "../../components/Navbar";
import { ButtonLink } from "../../styles/buttons";
import { GroupInput } from "../../styles/components/GroupInput";
import { GroupInputPassword } from "../../styles/components/GroupInputPassword";
import { Typography } from "../../styles/typography";
import { StyledRegisterPage } from "./styles";

export const RegisterPage = () => {
  return (
    <StyledRegisterPage>
      <Navbar labelButton="Voltar" />
      <CardForm>
        <Typography fonttype="title2" fontcolor="grey0" fontweight="semibody">
          Crie sua conta
        </Typography>
        <Typography fonttype="headline" fontcolor="grey1">
          Rapido e grátis, vamos nessa
        </Typography>
        <GroupInput
          label="Nome"
          placeholder="Digite aqui seu nome"
          helperMessage="Nome inválido"
        />
        <GroupInput
          label="Email"
          placeholder="Digite aqui seu email"
          helperMessage="Email inválido"
        />
        <GroupInputPassword
          label="Senha"
          placeholder="Digite sua senha"
          helperMessage="Senha inválido"
        />
        <GroupInputPassword
          label="Confirmar senha"
          placeholder="Digite novamente sua senha"
          helperMessage="Confirmação inválido"
        />
        <GroupInput label="Bio" placeholder="Fale sobre você" />
        <GroupInput label="Contato" placeholder="Opção de contato" />
        <ButtonLink
          buttonstyle="default"
          buttoncolor="primaryDisable"
          buttonwidth="max"
        >
          Cadastrar
        </ButtonLink>
      </CardForm>
    </StyledRegisterPage>
  );
};
