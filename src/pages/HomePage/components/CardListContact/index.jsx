import { useContext } from 'react'
import { EmptyContact } from '../EmptyContact'
import { CardContact } from '../CardContact'
import { StyledCardListTecno } from './styles'
import { ContactContext } from '../../../../contexts/ContactContext'

export const CardListContact = () => {
  const { techs } = useContext(ContactContext)
  return (
    <StyledCardListTecno>
      {techs.length > 0 ? (
        techs.map((tech) => <CardContact key={tech.id} tech={tech} />)
      ) : (
        <EmptyContact />
      )}
    </StyledCardListTecno>
  )
}
