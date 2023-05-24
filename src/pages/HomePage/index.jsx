/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Navbar } from '../../components/Navbar'
import { UserContext } from '../../contexts/UserContext'
import { Container } from '../../styles/container'
import { MainHome } from './components/MainHome'
import { StyledHomePage } from './styles'

export const HomePage = () => {
  const { onLogout } = useContext(UserContext)

  return (
    <StyledHomePage>
      <section>
        <Container>
          <Navbar labelButton='Sair' onClick={onLogout} />
        </Container>
      </section>
      <section>
        <Container>
          <Header />
        </Container>
      </section>
      <MainHome />
    </StyledHomePage>
  )
}
