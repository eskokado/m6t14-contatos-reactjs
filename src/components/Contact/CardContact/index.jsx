import { Typography } from '../../../styles/typography'
import { StyledCardContact } from './styles'
import { useContext } from 'react'
import { ContactContext } from '../../../contexts/ContactContext'

export const CardContact = ({ cardContact }) => {
  const { setShowContactModal, setContact, setPhonesContact } = useContext(ContactContext)
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
