import {
  StyledFormPhoneCustomerModalContent,
  StyledFormSection,
} from './styles'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import {GroupInput} from "../../../../../GroupInput";
import {Button} from "../../../../../../styles/buttons";
import {CustomerContext} from "../../../../../../contexts/CustomerContext";

export const FormPhoneCustomerModalContent = () => {
  const {
    onCreatePhoneCustomer,
    setShowPhoneCustomerModal,
    phoneCustomer,
    onUpdatePhoneCustomer,
    onRemovePhoneCustomer
  } = useContext(CustomerContext)

  const formSchemaCreate = yup.object().shape({
    name: yup
      .string()
      .required('Nome obrigatório')
      .min(3, 'O nome precisa ter pelo 3 caracteres.')
      .max(200, 'O nome pode ter no máximo 200 caracteres.'),
    number: yup
      .string()
      .required('Telefone é obrigatório')
      .min(8, 'O telefone precisa ter pelo 8 caracteres.')
      .max(15, 'O telefone pode ter no máximo 15 caracteres.'),
  })

  const formSchemaUpdate = yup.object().shape({
    name: yup
        .string()
        .required('Nome obrigatório')
        .min(3, 'O nome precisa ter pelo 3 caracteres.')
        .max(200, 'O nome pode ter no máximo 200 caracteres.'),
    number: yup
      .string()
      .required('Número é obrigatório')
      .min(8, 'O número precisa ter pelo 8 caracteres.')
      .max(15, 'O número pode ter no máximo 15 caracteres.'),
  })

  const defaultValues = {
    name: phoneCustomer?.name ?? '',
    number: phoneCustomer?.number ?? '',
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(phoneCustomer ? formSchemaUpdate : formSchemaCreate),
    mode: 'onChange'
  })

  const onSubmitFunction = (data) => {
    if (phoneCustomer) {
      onUpdatePhoneCustomer(data)
    } else {
      onCreatePhoneCustomer(data)
    }
    setShowPhoneCustomerModal(false)
  }

  const handleRemove = (id) => {
    onRemovePhoneCustomer(id)
    setShowPhoneCustomerModal(false)
  }

  return (
    <>
      <StyledFormSection>
        <StyledFormPhoneCustomerModalContent onSubmit={handleSubmit(onSubmitFunction)}>
          <GroupInput
            label='Nome'
            placeholder='Digite aqui o nome'
            helperMessage={errors.name?.message && errors.name.message}
            field='name'
            defaultValues={defaultValues}
            register={register}
          />
          <GroupInput
            label='Número'
            placeholder='Digite aqui o número'
            helperMessage={errors.number?.message && errors.number.message}
            field='number'
            defaultValues={defaultValues}
            register={register}
          />
          {phoneCustomer ? (
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
                onClick={() => handleRemove(phoneCustomer.id)}
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
              {'Cadastrar Telefone'}
            </Button>
          )}
        </StyledFormPhoneCustomerModalContent>
      </StyledFormSection>
    </>
  )
}
