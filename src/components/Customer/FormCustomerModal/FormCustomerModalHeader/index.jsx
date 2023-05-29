import { useContext } from 'react'
import { CustomerContext } from '../../../../contexts/CustomerContext'
import { Button } from '../../../../styles/buttons'
import { Typography } from '../../../../styles/typography'
import { StyledFormCustomerModalHeader } from './styles'

export const FormCustomerModalHeader = () => {
  const { setShowCustomerModal, tech } = useContext(CustomerContext)
  return (
    <StyledFormCustomerModalHeader>
      <Typography fonttype='title3' fontcolor='grey0' fontweight='semibold'>
        {tech ? 'Cliente Detalhes' : 'Cadastrar Cliente'}
      </Typography>
      <Button buttoncolor='grey1' onClick={() => setShowCustomerModal(false)}>
        X
      </Button>
    </StyledFormCustomerModalHeader>
  )
}
