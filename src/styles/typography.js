/* eslint-disable default-case */
import styled, { css } from "styled-components";
import { BaseFont } from "./components/BaseFont";

export const Typography = styled(BaseFont)`
  ${(props) => {
    if (props.body) {
      return css`
        font-weight: 700;
      `;
    } else if (props.semibody) {
      return css`
        font-weight: 600;
      `;
    } else if (props.medium) {
      return css`
        font-weight: 500;
      `;
    } else {
      return css`
        font-weight: 400;
      `;
    }
  }}
  ${(props) => {
    if (props.italic) {
      return css`
        font-style: italic;
      `;
    } else {
      return css`
        font-style: normal;
      `;
    }
  }}
  ${(props) => {
    if (props.primary)
      return css`
        color: var(--color-primary);
      `;
    else if (props.primary50)
      return css`
        color: var(--color-primary-50);
      `;
    else if (props.primaryDisable)
      return css`
        color: var(--color-primary-disable);
      `;
    else if (props.grey4)
      return css`
        color: var(--color-grey-4);
      `;
    else if (props.grey3)
      return css`
        color: var(--color-grey-3);
      `;
    else if (props.grey2)
      return css`
        color: var(--color-grey-2);
      `;
    else if (props.grey1)
      return css`
        color: var(--color-grey-1);
      `;
    else if (props.grey0)
      return css`
        color: var(--color-grey-0);
      `;
    else if (props.success)
      return css`
        color: var(--color-success);
      `;
    else if (props.warning)
      return css`
        color: var(--color-warning);
      `;
    else if (props.negative)
      return css`
        color: var(--color-negative);
      `;
    else
      return css`
        color: #ffffff;
      `;
  }}
  ${(props) => {
    if (props.title1) {
      return css`
        font-size: 1.8rem;
        line-height: 2.8rem;
      `;
    } else if (props.title2) {
      return css`
        font-size: 1.6rem;
        line-height: 2.6rem;
      `;
    } else if (props.title3) {
      return css`
        font-size: 1.4rem;
        line-height: 2.4rem;
      `;
    } else if (props.headline) {
      return css`
        font-size: 1.2rem;
        line-height: 1.8rem;
      `;
    } else if (props.helper) {
      return css`
        font-size: 1rem;
        line-height: 1.6rem;
      `;
    }
  }}
`;
