import { StyledCardPhoneContact} from './styles'
import { FaTrash } from 'react-icons/fa'
import { useContext } from 'react'
import {PhoneContactContext} from "../../../../../contexts/PhoneContactContext";
import {Typography} from "../../../../../styles/typography";

export const CardPhoneContact = ({ cardPhoneContact }) => {
  const { setPhoneContact, setShowPhoneContactModal } = useContext(PhoneContactContext)
  const handleShowModal = () => {
    setPhoneContact(cardPhoneContact)
    console.log('CardPhoneContact - cardPhoneContact', cardPhoneContact)
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
