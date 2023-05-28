import { StyledEmptyPhoneCustomer} from './styles'
import {Typography} from "../../../../../styles/typography";

export const EmptyPhoneCustomer = () => {
  return (
    <StyledEmptyPhoneCustomer>
      <Typography fonttype='title1' fontcolor='grey0' fontweight='body'>
        Sem telefones :(
      </Typography>
    </StyledEmptyPhoneCustomer>
  )
}
