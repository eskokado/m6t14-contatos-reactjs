import { useContext } from 'react'
import { StyledCardListPhoneContact} from './styles'
import { EmptyPhoneContact} from "../EmptyPhoneContact";
import {CardPhoneContact} from "../CardPhoneContact";
import {ContactContext} from "../../../../contexts/ContactContext";

export const CardListPhoneContact = () => {
  const { phonesContact } = useContext(ContactContext)
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
