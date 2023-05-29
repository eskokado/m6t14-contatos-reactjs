import { useContext } from 'react'
import { ContactContext } from '../../../../contexts/ContactContext'
import { Button } from '../../../../styles/buttons'
import { Typography } from '../../../../styles/typography'
import { StyledFormContactModalHeader } from './styles'

export const FormContactModalHeader = () => {
  const { setShowContactModal, tech } = useContext(ContactContext)
  return (
    <StyledFormContactModalHeader>
      <Typography fonttype='title3' fontcolor='grey0' fontweight='semibold'>
        {tech ? 'Contato Detalhes' : 'Cadastrar Contato'}
      </Typography>
      <Button buttoncolor='grey1' onClick={() => setShowContactModal(false)}>
        X
      </Button>
    </StyledFormContactModalHeader>
  )
}
