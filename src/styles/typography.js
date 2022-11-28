/* eslint-disable default-case */
import styled, { css } from "styled-components";
import { BaseFont } from "./components/BaseFont";

export const Typography = styled(BaseFont)`
  font-weight: ${({ fontWeight }) => fontWeight ?? "400"};
  ${({ fontStyle }) => {
    if (fontStyle === "italic") {
      return css`
        font-style: italic;
      `;
    } else {
      return css`
        font-style: normal;
      `;
    }
  }}
  ${({ color }) => {
    if (color === "grey0")
      return css`
        color: var(--color-grey-0);
      `;
    else if (color === "grey1")
      return css`
        color: var(--color-grey1);
      `;
    else if (color === "primary")
      return css`
        color: var(--color-primary);
      `;
    else
      return css`
        color: #ffffff;
      `;
  }}
  ${({ name }) => {
    switch (name) {
      case "title1":
        return css`
          font-size: 1.6rem;
        `;
      case "title2":
        return css`
          font-size: 1.4rem;
        `;
      case "title3":
        return css`
          font-size: 1.2rem;
        `;
      case "headline":
        return css`
          font-size: 1.2rem;
        `;
    }
  }}
`;
