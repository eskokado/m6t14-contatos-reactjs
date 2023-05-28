import { useContext } from 'react'
import { StyledFormPhoneContactModalHeader} from './styles'
import {PhoneContactContext} from "../../../../../../../contexts/PhoneContactContext";
import {Typography} from "../../../../../../../styles/typography";
import {Button} from "../../../../../../../styles/buttons";

export const FormPhoneContactModalHeader = () => {
  const { setShowPhoneContactModal, phoneContact } = useContext(PhoneContactContext)
  return (
    <StyledFormPhoneContactModalHeader>
      <Typography fonttype='title3' fontcolor='grey0' fontweight='semibold'>
        {phoneContact ? 'Telefone Detalhes' : 'Cadastrar Telefone'}
      </Typography>
      <Button buttoncolor='grey1' onClick={() => setShowPhoneContactModal(false)}>
        X
      </Button>
    </StyledFormPhoneContactModalHeader>
  )
}
