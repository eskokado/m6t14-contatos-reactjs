import { Typography } from '../../../../styles/typography'
import { StyledCardContact } from './styles'
import { FaTrash } from 'react-icons/fa'
import { Button } from '../../../../styles/buttons'
import { useContext } from 'react'
import { ContactContext } from '../../../../contexts/ContactContext'
import {PhoneContactContext} from "../../../../contexts/PhoneContactContext";

export const CardContact = ({ cardContact }) => {
  const { setShowContactModal, setContact, contact } = useContext(ContactContext)
  const { phonesContact, setPhonesContact } = useContext(PhoneContactContext)
  const handleShowModal = () => {
    setPhonesContact(cardContact.phones)
    setContact(cardContact)
    setShowContactModal(true)
  }

  return (
    <StyledCardContact onClick={handleShowModal}>
      <div>
        <Typography fonttype='title3' fontcolor='grey0'>
          {cardContact.name}
        </Typography>
        <Typography fonttype='headline' fontcolor='grey1'>
          {cardContact.email}
        </Typography>
      </div>
    </StyledCardContact>
  )
}
