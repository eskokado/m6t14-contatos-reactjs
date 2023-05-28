import { useContext } from 'react'
import { StyledFormPhoneCustomerModalHeader} from './styles'
import {PhoneCustomerContext} from "../../../../../../../contexts/PhoneCustomerContext";
import {Typography} from "../../../../../../../styles/typography";
import {Button} from "../../../../../../../styles/buttons";

export const FormPhoneCustomerModalHeader = () => {
  const { setShowPhoneCustomerModal, phoneCustomer } = useContext(PhoneCustomerContext)
  return (
    <StyledFormPhoneCustomerModalHeader>
      <Typography fonttype='title3' fontcolor='grey0' fontweight='semibold'>
        {phoneCustomer ? 'Telefone Detalhes' : 'Cadastrar Telefone'}
      </Typography>
      <Button buttoncolor='grey1' onClick={() => setShowPhoneCustomerModal(false)}>
        X
      </Button>
    </StyledFormPhoneCustomerModalHeader>
  )
}
