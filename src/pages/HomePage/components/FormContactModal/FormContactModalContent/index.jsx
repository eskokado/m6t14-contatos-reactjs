import { GroupInput } from '../../../../../components/GroupInput'
import { StyledFormContactModalContent } from './styles'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { GroupSelect } from '../../../../../components/GroupSelect'
import { Button } from '../../../../../styles/buttons'
import { useContext } from 'react'
import { ContactContext } from '../../../../../contexts/ContactContext'

export const FormContactModalContent = () => {
  const {
    loading,
    onCreateContact,
    setShowTechModal,
    contact,
    onUpdateTech,
    onRemoveTech
  } = useContext(ContactContext)

  const passwordRegExp =
    /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/

  const formSchema = yup.object().shape({
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
    resolver: yupResolver(formSchema),
    mode: 'onChange'
  })

  const onSubmitFunction = (data) => {
    if (contact) {
      delete data.title
      onUpdateTech(data)
    } else {
      onCreateContact(data)
      console.log(data)
    }
    setShowTechModal(false)
  }

  const handleRemove = (id) => {
    onRemoveTech(id)
    setShowTechModal(false)
  }

  return (
    <StyledFormContactModalContent onSubmit={handleSubmit(onSubmitFunction)}>
      <GroupInput
        label='Nome'
        placeholder='Digite aqui o nome'
        helperMessage={errors.name?.message && errors.name.message}
        field='name'
        disabled={contact ? true : false}
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
      <GroupInput
        label='Password'
        placeholder='Digite aqui a senha'
        helperMessage={errors.password?.message && errors.password.message}
        field='password'
        disabled={contact ? true : false}
        defaultValues={defaultValues}
        register={register}
      />
      {/* <GroupSelect
        label='Selecionar Customer'
        placeholder='Seleciona um status'
        helperMessage={errors.status?.message && errors.status.message}
        field='status'
        defaultValues={defaultValues}
        register={register}
        disabled={false}
        // options={optionsStatus}
      ></GroupSelect> */}
      {contact ? (
        <div>
          <Button
            type='submit'
            buttoncolor='primary50'
            buttonstyle='default'
            disabled={loading}
          >
            {loading ? 'Alterando...' : 'Salvar alterações'}
          </Button>
          <Button
            type='button'
            buttoncolor='grey1'
            buttonstyle='default'
            disabled={loading}
            onClick={() => handleRemove(contact.id)}
          >
            {loading ? 'Excluindo...' : 'Excluir'}
          </Button>
        </div>
      ) : (
        <Button
          type='submit'
          buttoncolor='primary50'
          buttonwidth='max'
          buttonstyle='default'
          disabled={loading}
        >
          {loading ? 'Cadastrando...' : 'Cadastrar Contato'}
        </Button>
      )}
    </StyledFormContactModalContent>
  )
}
