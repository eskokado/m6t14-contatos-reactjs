import { FormTechnologyModalContent } from "./FormTechnologyModalContent";
import { FormTechnologyModalHeader } from "./FormTechnologyModalHeader";
import { StyledFormTechnologyModal } from "./styles";

export const FormTechnologyModal = () => {
  return (
    <StyledFormTechnologyModal>
      <FormTechnologyModalHeader />
      <FormTechnologyModalContent />
    </StyledFormTechnologyModal>
  );
};
