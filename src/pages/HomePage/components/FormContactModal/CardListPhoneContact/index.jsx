import { useContext } from 'react'
import { StyledCardListPhoneContact} from './styles'
import {PhoneContactContext} from "../../../../../contexts/PhoneContactContext";
import { EmptyPhoneContact} from ".././EmptyPhoneContact";
import {CardPhoneContact} from "../CardPhoneContact";

export const CardListPhoneContact = () => {
  const { phonesContact } = useContext(PhoneContactContext)
  return (
    <StyledCardListPhoneContact>
      {phonesContact.length > 0 ? (
        phonesContact.map((phoneContact) => <CardPhoneContact key={phoneContact.id} cardPhoneContact={phoneContact} />)
      ) : (
        <EmptyPhoneContact />
      )}
    </StyledCardListPhoneContact>
  )
}
