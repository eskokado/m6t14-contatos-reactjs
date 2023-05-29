import styled from 'styled-components'

export const Wrapper = styled.div`
  background: #fff;
  height: 100vh;
  padding: 15px;
`

export const Cab = styled.div`
  display: flex;
  flex-direction: column;
  color: #eee;
  font-size: 25px;
  align-items: center;
  padding: 30px;
  background: #6082e2;
`

export const Subcab = styled.div`
  padding: 10px;
`

export const StyledParagraph = styled.p`
  color: #000;
`

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  color: #000;
  padding: 20px;
`

export const StyledTable = styled.table`
  color: #000;
  width: 100%;

  thead {
    background-color: #6082e2;
    color: #fff;
  }

  tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`
