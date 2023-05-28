import { useContext } from 'react'
import { StyledCardListPhoneCustomer} from './styles'
import {PhoneCustomerContext} from "../../../../../contexts/PhoneCustomerContext";
import { EmptyPhoneCustomer} from "../././EmptyPhoneCustomer";
import {CardPhoneCustomer} from "../CardPhoneCustomer";

export const CardListPhoneCustomer = () => {
  const { phonesCustomer } = useContext(PhoneCustomerContext)
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
