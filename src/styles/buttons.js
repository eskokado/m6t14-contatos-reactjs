/* eslint-disable default-case */
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Button = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 0.4rem;
  text-decoration: none;

  &:hover {
    filter: brightness(1.2);
  }

  ${(props) => {
    if (props.max) {
      return css`
        width: 100%;
      `;
    }
  }}

  ${(props) => {
    if (props.default) {
      return css`
        padding: 0 2.2rem;
        height: 4.8rem;
      `;
    } else if (props.small) {
      return css`
        padding: 0 1.6rem;
        height: 3.2rem;
      `;
    } else if (props.icon) {
      return css`
        height: 3.2rem;
      `;
    }
  }}

  ${(props) => {
    if (props.primary) {
      return css`
        background: var(--color-primary);
        color: var(--color-text);
        &:hover {
          background: var(--color-primary-50);
          color: var(--color-text);
        }
      `;
    } else if (props.primary50) {
      return css`
        background: var(--color-primary-50);
        color: var(--color-text);
        &:hover {
          background: var(--color-primary);
          color: var(--color-text);
        }
      `;
    } else if (props.primaryDisable) {
      return css`
        background: var(--color-primary-disable);
        color: var(--color-text);
      `;
    } else if (props.disabled) {
      return css`
        background: var(--color-grey-1);
        color: var(--color-text);

        &:hover {
          background: var(--color-grey-2);
          color: var(--color-text);
        }
      `;
    } else if (props.grey) {
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
