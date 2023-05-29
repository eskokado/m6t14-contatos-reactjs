import React from 'react'
import { CustomerContext } from '../../contexts/CustomerContext'
import {Wrapper, Cab, Subcab, StyledParagraph, FlexColumn, StyledTable} from './styles'

export class CustomerToPrint extends React.Component {
  static contextType = CustomerContext
  render() {
    const { customer } = this.context
    return (
      <Wrapper>
        <Cab>
          <StyledParagraph>Cliente</StyledParagraph>
        </Cab>
        <Subcab>
          <StyledParagraph>Nome: {customer.name} </StyledParagraph>
          <StyledParagraph>Email: {customer.email}</StyledParagraph>
          <StyledParagraph>Criado em: {new Date(customer.createdAt).toLocaleString()}</StyledParagraph>
        </Subcab>
        <FlexColumn>
          <StyledTable>
            <thead>
            <tr>
              <th colSpan={2}>Telefones do Cliente</th>
            </tr>
            <tr>
              <th>Nome</th>
              <th>Número</th>
            </tr>
            </thead>
            <tbody>
            {customer.phones.map(phone => (
              <tr key={phone.id}>
                <td>{phone.name}</td>
                <td>{phone.number}</td>
              </tr>
            ))}
            </tbody>
          </StyledTable>
          <br/>
          <br/>
          <StyledTable>
            <thead>
            <tr>
              <th colSpan={3}>Dados do contato</th>
            </tr>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefones do Contato</th>
            </tr>
            </thead>
            <tbody>
            {customer.contacts.map(contact => (
              <React.Fragment key={contact.id}>
                <tr>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>
                    <StyledTable>
                      <thead>
                      <tr>
                        <th>Nome</th>
                        <th>Número</th>
                      </tr>
                      </thead>
                      <tbody>
                      {contact.phones.map(phone => (
                        <tr key={phone.id}>
                          <td>{phone.name}</td>
                          <td>{phone.number}</td>
                        </tr>
                      ))}
                      </tbody>
                    </StyledTable>
                  </td>
                </tr>
              </React.Fragment>
            ))}
            </tbody>
          </StyledTable>
        </FlexColumn>
      </Wrapper>
    )
  }
}
