import { useContext } from 'react'
import { ContactContext } from '../../../../contexts/ContactContext'
import { Container } from '../../../../styles/container'
import { FormContactModal } from '../FormContactModal'
import { StyledModalWrapper } from '../FormContactModal/styles'
import { MainContent } from '../MainContent'
import { MainTop } from '../MainTop'
import { StyledMainHome } from './styles'

export const MainHome = () => {
  const { showTechModal } = useContext(ContactContext)
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
      {showTechModal && (
        <StyledModalWrapper>
          <FormContactModal></FormContactModal>
        </StyledModalWrapper>
      )}
    </>
  )
}
