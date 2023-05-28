import { useContext } from 'react'
import { EmptyContact } from '../EmptyContact'
import { CardContact } from '../CardContact'
import { StyledCardListContact } from './styles'
import { ContactContext } from '../../../../contexts/ContactContext'

export const CardListContact = () => {
  const { contacts } = useContext(ContactContext)
  return (
    <StyledCardListContact>
      {contacts.length > 0 ? (
        contacts.map((contact) => <CardContact key={contact.id} cardContact={contact} />)
      ) : (
        <EmptyContact />
      )}
    </StyledCardListContact>
  )
}
