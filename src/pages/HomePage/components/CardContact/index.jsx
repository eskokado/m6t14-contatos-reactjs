import { Typography } from '../../../../styles/typography'
import { StyledCardContact } from './styles'
import { FaTrash } from 'react-icons/fa'
import { Button } from '../../../../styles/buttons'
import { useContext } from 'react'
import { ContactContext } from '../../../../contexts/ContactContext'

export const CardContact = ({ contact }) => {
  const { setShowContactModal, setContact } = useContext(ContactContext)
  const handleShowModal = () => {
    setContact(contact)
    setShowContactModal(true)
  }

  return (
    <StyledCardContact onClick={handleShowModal}>
      <div>
        <Typography fonttype='title3' fontcolor='grey0'>
          {contact.name}
        </Typography>
        <Typography fonttype='headline' fontcolor='grey1'>
          {contact.email}
        </Typography>
      </div>
    </StyledCardContact>
  )
}
