import { GroupInput } from '../../../../../components/GroupInput'
import {StyledFormContactModalContent, StyledFormSection, StyledListSection} from './styles'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Button } from '../../../../../styles/buttons'
import { useContext } from 'react'
import { ContactContext } from '../../../../../contexts/ContactContext'
import {GroupInputPassword} from "../../../../../components/GroupInputPassword";
import {PhoneContactContext} from "../../../../../contexts/PhoneContactContext";
import { MainTopPhoneContact} from ".././MainTopPhoneContact";
import {Container} from "../../../../../styles/container";
import {MainContentPhoneContact} from "../MainContentPhoneContact";
import {StyledModalWrapper} from "../styles";
import {FormPhoneContactModal} from "./FormPhoneContactModal";

export const FormContactModalContent = () => {
  const {
    onCreateContact,
    setShowContactModal,
    contact,
    onUpdateContact,
    onRemoveContact
  } = useContext(ContactContext)

  const { phonesContact, setPhonesContact, showPhoneContactModal } = useContext(PhoneContactContext)

  const passwordRegExp =
    /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/

  const formSchemaCreate = yup.object().shape({
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    name: yup
      .string()
      .required('Nome obrigatório')
      .min(3, 'O nome precisa ter pelo 3 caracteres.')
      .max(200, 'O nome pode ter no máximo 200 caracteres.'),
    password: yup
      .string()
      .required('Senha obrigatório')
      .matches(
        passwordRegExp,
        'A senha deve conter pelo menos 8 caracteres, uma maiúscula, um número e um caractere especial'
      )
  })

  const formSchemaUpdate = yup.object().shape({
    name: yup
        .string()
        .required('Nome obrigatório')
        .min(3, 'O nome precisa ter pelo 3 caracteres.')
        .max(200, 'O nome pode ter no máximo 200 caracteres.'),
  })

  const defaultValues = {
    name: contact?.name ?? '',
    email: contact?.email ?? '',
    password: contact?.password ?? ''
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(contact ? formSchemaUpdate : formSchemaCreate),
    mode: 'onChange'
  })

  const onSubmitFunction = (data) => {
    if (contact) {
      delete data.title
      onUpdateContact(data)
    } else {
      onCreateContact(data)
    }
    setShowContactModal(false)
  }

  const handleRemove = (id) => {
    onRemoveContact(id)
    setShowContactModal(false)
  }

  return (
    <>
      <StyledFormSection>
        <StyledFormContactModalContent onSubmit={handleSubmit(onSubmitFunction)}>
          <GroupInput
            label='Nome'
            placeholder='Digite aqui o nome'
            helperMessage={errors.name?.message && errors.name.message}
            field='name'
            defaultValues={defaultValues}
            register={register}
          />
          <GroupInput
            label='Email'
            placeholder='Digite aqui o email'
            helperMessage={errors.email?.message && errors.email.message}
            field='email'
            disabled={contact ? true : false}
            defaultValues={defaultValues}
            register={register}
          />
          <GroupInputPassword
            label='Password'
            placeholder='Digite sua senha'
            helperMessage={errors.password?.message && errors.password.message}
            field='password'
            register={register}
            disabled={contact ? true : false}
            defaultValues={defaultValues}
            defaultValues={defaultValues}
          />
          {contact ? (
            <div>
              <Button
                type='submit'
                buttoncolor='primary50'
                buttonstyle='default'
              >
                {'Salvar alterações'}
              </Button>
              <Button
                type='button'
                buttoncolor='grey1'
                buttonstyle='default'
                onClick={() => handleRemove(contact.id)}
              >
                {'Excluir'}
              </Button>
            </div>
          ) : (
            <Button
              type='submit'
              buttoncolor='primary50'
              buttonwidth='max'
              buttonstyle='default'
            >
              {'Cadastrar Contato'}
            </Button>
          )}
        </StyledFormContactModalContent>
      </StyledFormSection>
      <StyledListSection>
        <Container>
          <MainTopPhoneContact />
          <MainContentPhoneContact />
        </Container>
      </StyledListSection>
      {showPhoneContactModal && (
        <StyledModalWrapper>
          <FormPhoneContactModal></FormPhoneContactModal>
        </StyledModalWrapper>
      )}
    </>
  )
}
