/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react'
import { Header } from '../../components/Header'
import { Navbar } from '../../components/Navbar'
import { CustomerContext } from '../../contexts/CustomerContext'
import { Container } from '../../styles/container'
import { MainHome } from './components/MainHome'
import { StyledHomePage } from './styles'
import {Navigate} from "react-router-dom";

export const HomePage = () => {
  const { onLogout, onCustomerPrint, getCustomer, onCustomerEdit, loading, customer } = useContext(CustomerContext)

  if (loading) return null;

  return customer ? (
    <StyledHomePage>
      <section>
        <Container>
          <Navbar
            labelButton='Sair'
            onClick={onLogout}
            labelPrint='Imprimir'
            onPrint={onCustomerPrint}
            labelProfile='Profile'
            onProfile={onCustomerEdit}
          />
        </Container>
      </section>
      <section>
        <Container>
          <Header />
        </Container>
      </section>
      <MainHome />
    </StyledHomePage>
  ) : (
    <Navigate to='/'/>
  )
}
