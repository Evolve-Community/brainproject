import type { StyledFileEntryProps } from "components/system/Files/Views";
import styled from "styled-components";

const StyledFileEntry = styled.li<StyledFileEntryProps>`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  height: min-content;
  padding: 2px;

  &.focus-within,
  &:hover {
    border: 2px solid transparent;
    padding: 0;
    position: relative;

    &::before {
      bottom: -1px;
      content: "";
      left: -1px;
      position: absolute;
      right: -1px;
      top: -1px;
    }
  }

  button {
    position: relative;

    figure {
      display: flex;
      flex-direction: column;
      margin-bottom: -2px;
      place-items: center;

      figcaption {
        color: ${({ theme }) => theme.colors.fileEntry.text};
        font-size: ${({ theme }) => theme.sizes.fileEntry.fontSize};
        letter-spacing: -0.1px;
        line-height: 1.2;
        margin: 1px 0;
        padding: 2px 1px;
        text-shadow: ${({ theme }) => theme.colors.fileEntry.textShadow};
        word-break: break-word;
      }

      img {
        width: ${({ theme }) => theme.sizes.fileEntry.iconSize};

        &:not(:first-of-type) {
          position: absolute;
        }
      }
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.fileEntry.background};

    &::before {
      border: ${({ theme }) => `1px solid ${theme.colors.fileEntry.border}`};
    }
  }

  &.focus-within {
    background-color: ${({ theme }) =>
      theme.colors.fileEntry.backgroundFocused};
    z-index: 1;

    &.only-focused {
      margin-bottom: -1000px;
    }

    &::before {
      border: ${({ theme }) =>
        `1px solid ${theme.colors.fileEntry.borderFocused}`};
    }

    &:hover {
      background-color: ${({ theme }) =>
        theme.colors.fileEntry.backgroundFocusedHover};

      &::before {
        border: ${({ theme }) =>
          `1px solid ${theme.colors.fileEntry.borderFocusedHover}`};
      }
    }
  }
`;

export default StyledFileEntry;
