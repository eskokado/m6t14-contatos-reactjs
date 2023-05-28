import { useContext } from 'react'
import { CustomerContext } from '../../contexts/CustomerContext'
import { Typography } from '../../styles/typography'
import { StyledHeader } from './styles'

export const Header = () => {
  const { customer } = useContext(CustomerContext)
  return (
    <StyledHeader>
      <Typography fonttype='title1' fontcolor='grey0'>
        { `Olá, ${customer.name}` }
      </Typography>
      <Typography fonttype='headline' fontweight='bold' fontcolor='grey1'>
        { customer.email }
      </Typography>
    </StyledHeader>
  )
}
