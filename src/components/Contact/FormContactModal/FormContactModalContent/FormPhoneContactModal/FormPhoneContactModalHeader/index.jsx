import { useContext } from 'react'
import { StyledFormPhoneContactModalHeader} from './styles'
import {Typography} from "../../../../../../styles/typography";
import {Button} from "../../../../../../styles/buttons";
import {ContactContext} from "../../../../../../contexts/ContactContext";

export const FormPhoneContactModalHeader = () => {
  const { setShowPhoneContactModal, phoneContact } = useContext(ContactContext)
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
