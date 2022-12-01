import styled from "styled-components";

export const StyledUnderDevelopment = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  & > p {
    margin-top: 2rem;
  }
  @media (max-width: 400px) {
    padding: 2rem;
    & > p {
      margin-top: 1rem;
    }
  }
`;
