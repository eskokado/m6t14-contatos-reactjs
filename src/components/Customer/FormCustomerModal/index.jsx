import { FormCustomerModalContent } from './FormCustomerModalContent'
import { FormCustomerModalHeader } from './FormCustomerModalHeader'
import { StyledFormCustomerModal } from './styles'

export const FormCustomerModal = () => {
  return (
    <StyledFormCustomerModal>
      <FormCustomerModalHeader />
      <FormCustomerModalContent />
    </StyledFormCustomerModal>
  )
}
