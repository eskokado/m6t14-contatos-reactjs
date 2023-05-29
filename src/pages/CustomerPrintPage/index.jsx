import React from 'react'
import ReactToPrint from 'react-to-print'
import { CustomerToPrint } from '../../components/CustomerToPrint'
import { Link } from 'react-router-dom'
import {PrintAndHomeContainer, StyledButton} from "./styles";

export class CustomerPrintPage extends React.Component {
  render() {
    return (
      <div
        style={{
          background: '#fff',
          height: '100vh',
          padding: '15px'
        }}
      >
        <PrintAndHomeContainer>
          <ReactToPrint
            trigger={() => <StyledButton>Imprimir Customer</StyledButton>}
            content={() => this.componentRef}
          />
          <Link to="/">Voltar para a Home</Link>
        </PrintAndHomeContainer>
        <CustomerToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    )
  }
}
