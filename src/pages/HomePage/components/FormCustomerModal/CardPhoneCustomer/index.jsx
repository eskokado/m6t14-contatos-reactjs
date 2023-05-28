import { StyledCardPhoneCustomer} from './styles'
import { FaTrash } from 'react-icons/fa'
import { useContext } from 'react'
import {PhoneCustomerContext} from "../../../../../contexts/PhoneCustomerContext";
import {Typography} from "../../../../../styles/typography";

export const CardPhoneCustomer = ({ cardPhoneCustomer }) => {
  const { setPhoneCustomer, setShowPhoneCustomerModal } = useContext(PhoneCustomerContext)
  const handleShowModal = () => {
    setPhoneCustomer(cardPhoneCustomer)
    setShowPhoneCustomerModal(true)
  }

  return (
    <StyledCardPhoneCustomer onClick={handleShowModal}>
      <div>
        <Typography fonttype='title3' fontcolor='grey0'>
          {cardPhoneCustomer.name}
        </Typography>
        <Typography fonttype='headline' fontcolor='grey1'>
          {cardPhoneCustomer.number}
        </Typography>
      </div>
    </StyledCardPhoneCustomer>
  )
}
