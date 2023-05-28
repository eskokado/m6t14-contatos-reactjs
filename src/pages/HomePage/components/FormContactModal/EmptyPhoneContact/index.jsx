import { StyledEmptyPhoneContact} from './styles'
import {Typography} from "../../../../../styles/typography";

export const EmptyPhoneContact = () => {
  return (
    <StyledEmptyPhoneContact>
      <Typography fonttype='title1' fontcolor='grey0' fontweight='body'>
        Sem telefones :(
      </Typography>
    </StyledEmptyPhoneContact>
  )
}
