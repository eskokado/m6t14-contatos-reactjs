import { StyledMainTopPhoneContact} from './styles'
import { FaPlus } from 'react-icons/fa'
import { useContext } from 'react'
import {Typography} from "../../../../styles/typography";
import {Button} from "../../../../styles/buttons";
import {ContactContext} from "../../../../contexts/ContactContext";

export const MainTopPhoneContact = () => {
  const { setShowPhoneContactModal, setPhoneContact } = useContext(ContactContext)
  const handleShowModal = () => {
    setPhoneContact(null)
    setShowPhoneContactModal(true)
  }

  return (
    <>
      <StyledMainTopPhoneContact>
        <Typography fontweight='semibold' fontcolor='grey0' fonttype='title2'>
          Telefones
        </Typography>
        <Button buttonstyle='icon' buttoncolor='grey' onClick={handleShowModal}>
          <FaPlus />
        </Button>
      </StyledMainTopPhoneContact>
    </>
  )
}
