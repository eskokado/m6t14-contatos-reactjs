import { FormContactModalContent } from './FormContactModalContent'
import { FormContactModalHeader } from './FormContactModalHeader'
import { StyledFormContactModal } from './styles'

export const FormContactModal = () => {
  return (
    <StyledFormContactModal>
      <FormContactModalHeader />
      <FormContactModalContent />
    </StyledFormContactModal>
  )
}
