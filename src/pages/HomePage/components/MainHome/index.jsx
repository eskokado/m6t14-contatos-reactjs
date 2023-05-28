import { useContext } from 'react'
import { ContactContext } from '../../../../contexts/ContactContext'
import { Container } from '../../../../styles/container'
import { FormContactModal } from '../FormContactModal'
import { StyledModalWrapper } from '../FormContactModal/styles'
import { MainContent } from '../MainContent'
import { MainTop } from '../MainTop'
import { StyledMainHome } from './styles'
import {FormCustomerModal} from "../FormCustomerModal";
import {CustomerContext} from "../../../../contexts/CustomerContext";

export const MainHome = () => {
  const { showContactModal } = useContext(ContactContext)
  const { showCustomerModal } = useContext(CustomerContext)
  return (
    <>
      <StyledMainHome>
        <section>
          <Container>
            <MainTop />
            <MainContent />
          </Container>
        </section>
      </StyledMainHome>
      {showContactModal && (
        <StyledModalWrapper>
          <FormContactModal></FormContactModal>
        </StyledModalWrapper>
      )}
      {showCustomerModal && (
        <StyledModalWrapper>
          <FormCustomerModal></FormCustomerModal>
        </StyledModalWrapper>
      )}
    </>
  )
}
