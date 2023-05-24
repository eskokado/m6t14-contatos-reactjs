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
    onCreateTech,
    setShowTechModal,
    tech,
    onUpdateTech,
    onRemoveTech
  } = useContext(ContactContext)

  const formSchema = tech
    ? yup.object().shape({
        status: yup.string().required('Nível é obrigatório')
      })
    : yup.object().shape({
        title: yup.string().required('Título é obrigatório'),
        status: yup.string().required('Nível é obrigatório')
      })

  const defaultValues = {
    title: tech?.title ?? '',
    status: tech?.status ?? ''
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
    if (tech) {
      delete data.title
      onUpdateTech(data)
    } else {
      onCreateTech(data)
    }
    setShowTechModal(false)
  }

  const handleRemove = (id) => {
    onRemoveTech(id)
    setShowTechModal(false)
  }

  const optionsStatus = [
    { value: '', text: 'Seleciona um status' },
    { value: 'Iniciante', text: 'Iniciante' },
    { value: 'Intermediário', text: 'Intermediário' },
    { value: 'Avançado', text: 'Avançado' }
  ]

  return (
    <StyledFormContactModalContent onSubmit={handleSubmit(onSubmitFunction)}>
      <GroupInput
        label='Título'
        placeholder='Digite aqui o título'
        helperMessage={errors.title?.message && errors.title.message}
        field='title'
        disabled={tech ? true : false}
        defaultValues={defaultValues}
        register={register}
      />
      <GroupSelect
        label='Selecionar status'
        placeholder='Seleciona um status'
        helperMessage={errors.status?.message && errors.status.message}
        field='status'
        defaultValues={defaultValues}
        register={register}
        disabled={false}
        options={optionsStatus}
      ></GroupSelect>
      {tech ? (
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
            onClick={() => handleRemove(tech.id)}
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
