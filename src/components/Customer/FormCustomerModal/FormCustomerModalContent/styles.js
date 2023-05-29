import styled from 'styled-components'

export const StyledFormCustomerModalContent = styled.form`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-3);
  width: 100%;
  padding: 1rem 2rem;
  gap: 1rem;
  & > div {
    display: flex;
    justify-content: space-between;
  }
`

export const StyledFormSection = styled.section`
  width: 90%;
  margin-bottom: 1.5rem;
`

export const StyledListSection = styled.section`
  width: 90%;
  margin-bottom: 1.5rem;
`
