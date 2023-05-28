import {
  StyledFormPhoneContactModalContent,
  StyledFormSection,
} from './styles'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import {PhoneContactContext} from "../../../../../../../contexts/PhoneContactContext";
import {GroupInput} from "../../../../../../../components/GroupInput";
import {Button} from "../../../../../../../styles/buttons";

export const FormPhoneContactModalContent = () => {
  const {
    onCreatePhoneContact,
    setShowPhoneContactModal,
    phoneContact,
    phonesContact,
    setPhonesContact,
    // onUpdateContact,
    // onRemoveContact
  } = useContext(PhoneContactContext)

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
    name: phoneContact?.name ?? '',
    number: phoneContact?.number ?? '',
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(phoneContact ? formSchemaUpdate : formSchemaCreate),
    mode: 'onChange'
  })

  const onSubmitFunction = (data) => {
    // if (phoneContact) {
    //   onUpdatePhoneContact(data)
    // } else {
      onCreatePhoneContact(data)
    // }
    setShowPhoneContactModal(false)
  }

  const handleRemove = (id) => {
    // onRemovePhoneContact(id)
    setShowPhoneContactModal(false)
  }

  return (
    <>
      <StyledFormSection>
        <StyledFormPhoneContactModalContent onSubmit={handleSubmit(onSubmitFunction)}>
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
          {phoneContact ? (
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
                onClick={() => handleRemove(phoneContact.id)}
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
        </StyledFormPhoneContactModalContent>
      </StyledFormSection>
    </>
  )
}
