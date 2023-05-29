import { StyledFormPhoneCustomerModal} from './styles'
import {FormPhoneCustomerModalHeader} from "./FormPhoneCustomerModalHeader";
import {FormPhoneCustomerModalContent} from "./FormPhoneCustomerModalContent";

export const FormPhoneCustomerModal = () => {
  return (
    <StyledFormPhoneCustomerModal>
      <FormPhoneCustomerModalHeader />
      <FormPhoneCustomerModalContent />
    </StyledFormPhoneCustomerModal>
  )
}
