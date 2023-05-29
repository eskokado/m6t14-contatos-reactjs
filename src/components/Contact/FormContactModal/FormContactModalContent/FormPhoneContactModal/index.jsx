import { StyledFormPhoneContactModal} from './styles'
import {FormPhoneContactModalHeader} from "./FormPhoneContactModalHeader";
import {FormPhoneContactModalContent} from "./FormPhoneContactModalContent";

export const FormPhoneContactModal = () => {
  return (
    <StyledFormPhoneContactModal>
      <FormPhoneContactModalHeader />
      <FormPhoneContactModalContent />
    </StyledFormPhoneContactModal>
  )
}
