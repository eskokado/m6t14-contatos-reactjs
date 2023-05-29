import { StyledCardPhoneContact} from './styles'
import { useContext } from 'react'
import {Typography} from "../../../../styles/typography";
import {ContactContext} from "../../../../contexts/ContactContext";

export const CardPhoneContact = ({ cardPhoneContact }) => {
  const { setPhoneContact, setShowPhoneContactModal } = useContext(ContactContext)
  const handleShowModal = () => {
    setPhoneContact(cardPhoneContact)
    setShowPhoneContactModal(true)
  }

  return (
    <StyledCardPhoneContact onClick={handleShowModal}>
      <div>
        <Typography fonttype='title3' fontcolor='grey0'>
          {cardPhoneContact.name}
        </Typography>
        <Typography fonttype='headline' fontcolor='grey1'>
          {cardPhoneContact.number}
        </Typography>
      </div>
    </StyledCardPhoneContact>
  )
}
