import { StyledCardPhoneCustomer} from './styles'
import { useContext } from 'react'
import {Typography} from "../../../../styles/typography";
import {CustomerContext} from "../../../../contexts/CustomerContext";

export const CardPhoneCustomer = ({ cardPhoneCustomer }) => {
  const { setPhoneCustomer, setShowPhoneCustomerModal } = useContext(CustomerContext)
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
