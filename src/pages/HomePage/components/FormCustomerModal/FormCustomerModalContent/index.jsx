import { GroupInput } from '../../../../../components/GroupInput'
import {StyledFormCustomerModalContent, StyledFormSection, StyledListSection} from './styles'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Button } from '../../../../../styles/buttons'
import { useContext } from 'react'
import { CustomerContext } from '../../../../../contexts/CustomerContext'
import {GroupInputPassword} from "../../../../../components/GroupInputPassword";
import { MainTopPhoneCustomer} from ".././MainTopPhoneCustomer";
import {Container} from "../../../../../styles/container";
import {MainContentPhoneCustomer} from "../MainContentPhoneCustomer";
import {StyledModalWrapper} from "../styles";
import {FormPhoneCustomerModal} from "././FormPhoneCustomerModal";
import {PhoneCustomerContext} from "../../../../../contexts/PhoneCustomerContext";

export const FormCustomerModalContent = () => {
  const {
    setShowCustomerModal,
    customer,
    onUpdateCustomer,
    onRemoveCustomer
  } = useContext(CustomerContext)

  const { showPhoneCustomerModal } = useContext(PhoneCustomerContext)

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
    name: customer?.name ?? '',
    email: customer?.email ?? '',
    password: customer?.password ?? ''
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(customer ? formSchemaUpdate : formSchemaCreate),
    mode: 'onChange'
  })

  const onSubmitFunction = (data) => {
    onUpdateCustomer(data)
    setShowCustomerModal(false)
  }

  const handleRemove = (id) => {
    onRemoveCustomer(id)
    setShowCustomerModal(false)
  }

  return (
    <>
      <StyledFormSection>
        <StyledFormCustomerModalContent onSubmit={handleSubmit(onSubmitFunction)}>
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
            disabled={customer ? true : false}
            defaultValues={defaultValues}
            register={register}
          />
          <GroupInputPassword
            label='Password'
            placeholder='Digite sua senha'
            helperMessage={errors.password?.message && errors.password.message}
            field='password'
            register={register}
            disabled={customer ? true : false}
            defaultValues={defaultValues}
          />
          {customer ? (
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
                onClick={() => handleRemove(customer.id)}
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
              {'Cadastrar Cliente'}
            </Button>
          )}
        </StyledFormCustomerModalContent>
      </StyledFormSection>
      {customer?.id && (<StyledListSection>
        <Container>
          <MainTopPhoneCustomer />
          <MainContentPhoneCustomer />
        </Container>
      </StyledListSection>)}
      {customer?.id && showPhoneCustomerModal && (
        <StyledModalWrapper>
          <FormPhoneCustomerModal></FormPhoneCustomerModal>
        </StyledModalWrapper>
      )}
    </>
  )
}
