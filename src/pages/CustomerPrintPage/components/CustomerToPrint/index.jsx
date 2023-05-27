import React from 'react'
import { UserContext } from '../../../../contexts/UserContext'
import {Wrapper, Cab, Subcab, StyledParagraph, FlexColumn, StyledTable} from './styles'

export class CustomerToPrint extends React.Component {
  static contextType = UserContext
  render() {
    const { customer } = this.context
    return (
      <Wrapper>
        <Cab>
          <StyledParagraph>Customer</StyledParagraph>
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
              <th>Nome</th>
              <th>Email</th>
              <th>Telefones</th>
            </tr>
            </thead>
            <tbody>
            {customer.contacts.map(contact => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>
                  {contact.phones.map(phone => (
                    <p key={phone.id}>{phone.number}</p>
                  ))}
                </td>
              </tr>
            ))}
            </tbody>
          </StyledTable>
        </FlexColumn>
      </Wrapper>
    )
  }
}
