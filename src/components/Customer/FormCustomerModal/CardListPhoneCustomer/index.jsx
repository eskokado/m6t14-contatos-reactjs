import { useContext } from 'react'
import { StyledCardListPhoneCustomer} from './styles'
import { EmptyPhoneCustomer} from "../EmptyPhoneCustomer";
import {CardPhoneCustomer} from "../CardPhoneCustomer";
import {CustomerContext} from "../../../../contexts/CustomerContext";

export const CardListPhoneCustomer = () => {
  const { phonesCustomer } = useContext(CustomerContext)
  return (
    <StyledCardListPhoneCustomer>
      {phonesCustomer.length > 0 ? (
        phonesCustomer.map((phoneCustomer) => <CardPhoneCustomer key={phoneCustomer.id} cardPhoneCustomer={phoneCustomer} />)
      ) : (
        <EmptyPhoneCustomer />
      )}
    </StyledCardListPhoneCustomer>
  )
}
