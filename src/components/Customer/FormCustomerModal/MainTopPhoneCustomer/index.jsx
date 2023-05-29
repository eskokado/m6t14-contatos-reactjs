import { FaPlus } from 'react-icons/fa'
import { useContext } from 'react'
import {Typography} from "../../../../styles/typography";
import {Button} from "../../../../styles/buttons";
import {StyledMainTopPhoneCustomer} from "./styles";
import {CustomerContext} from "../../../../contexts/CustomerContext";

export const MainTopPhoneCustomer = () => {
  const { setShowPhoneCustomerModal, setPhoneCustomer } = useContext(CustomerContext)
  const handleShowModal = () => {
    setPhoneCustomer(null)
    setShowPhoneCustomerModal(true)
  }

  return (
    <>
      <StyledMainTopPhoneCustomer>
        <Typography fontweight='semibold' fontcolor='grey0' fonttype='title2'>
          Telefones
        </Typography>
        <Button buttonstyle='icon' buttoncolor='grey' onClick={handleShowModal}>
          <FaPlus />
        </Button>
      </StyledMainTopPhoneCustomer>
    </>
  )
}
