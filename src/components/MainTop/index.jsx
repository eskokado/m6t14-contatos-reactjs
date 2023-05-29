import { Button } from '../../styles/buttons'
import { Typography } from '../../styles/typography'
import { StyledMainTop } from './styles'
import { FaPlus } from 'react-icons/fa'
import { useContext } from 'react'
import { ContactContext } from '../../contexts/ContactContext'

export const MainTop = () => {
  const { setShowContactModal, setContact } = useContext(ContactContext)
  const handleShowModal = () => {
    setContact(null)
    setShowContactModal(true)
  }

  return (
    <>
      <StyledMainTop>
        <Typography fontweight='semibold' fontcolor='grey0' fonttype='title2'>
          Contatos
        </Typography>
        <Button buttonstyle='icon' buttoncolor='grey' onClick={handleShowModal}>
          <FaPlus />
        </Button>
      </StyledMainTop>
    </>
  )
}
