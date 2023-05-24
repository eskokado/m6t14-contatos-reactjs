import { Typography } from '../../../../styles/typography'
import { StyledEmptyContact } from './styles'

export const EmptyContact = () => {
  return (
    <StyledEmptyContact>
      <Typography fonttype='title1' fontcolor='grey0' fontweight='body'>
        Sem contato :(
      </Typography>
    </StyledEmptyContact>
  )
}
