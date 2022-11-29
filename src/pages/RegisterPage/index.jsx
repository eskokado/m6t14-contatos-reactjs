import { CardForm } from "../../components/CardForm";
import { HeaderRegister } from "../../components/HeaderRegister";
import { Button } from "../../styles/buttons";
import { GroupInput } from "../../styles/components/GroupInput";
import { Typography } from "../../styles/typography";
import { StyledRegisterPage } from "./styles";

export const RegisterPage = () => {
  return (
    <StyledRegisterPage>
      <HeaderRegister />
      <CardForm>
        <Typography title2 grey0 semibody>
          Crie sua conta
        </Typography>
        <Typography headline grey1>
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
        <GroupInput
          label="Senha"
          placeholder="Digite aqui sua senha"
          helperMessage="Senha inválido"
        />
        <GroupInput
          label="Confirmar senha"
          placeholder="Digite novamente sua senha"
          helperMessage="Confirmação inválido"
        />
        <GroupInput label="Bio" placeholder="Fale sobre você" />
        <GroupInput label="Contato" placeholder="Opção de contato" />
        <Button default primary max>
          Cadastrar
        </Button>
      </CardForm>
    </StyledRegisterPage>
  );
};
