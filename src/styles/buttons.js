/* eslint-disable default-case */
import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 0.4rem;

  &:hover {
    filter: brightness(1.2);
  }

  ${({ buttonSize }) => {
    switch (buttonSize) {
      case "default":
        return css`
          padding: 0 2.2rem;
          height: 4.8rem;
        `;
      case "small":
        return css`
          padding: 0 1.6rem;
          height: 3.2rem;
        `;
      case "icon":
        return css`
          height: 3.2rem;
        `;
    }
  }}

  ${({ buttonStyle }) => {
    switch (buttonStyle) {
      case "primary":
        return css`
          background: var(--color-primary);
          color: var(--color-text);
          &:hover {
            background: var(--color-primary-50);
            color: var(--color-text);
          }
        `;
      case "primary50":
        return css`
          background: var(--color-primary-50);
          color: var(--color-text);
          &:hover {
            background: var(--color-primary);
            color: var(--color-text);
          }
        `;
      case "primaryNegative":
        return css`
          background: var(--color-primary-50);
          color: var(--color-text);
        `;

      case "disabled":
        return css`
          background: var(--color-grey-1);
          color: var(--color-text);

          &:hover {
            background: var(--color-grey-2);
            color: var(--color-text);
          }
        `;
      case "grey":
        return css`
          background: var(--color-grey-3);
          color: var(--color-text);

          &:hover {
            background: var(--color-grey-2);
            color: var(--color-text);
          }
        `;
    }
  }}
`;
