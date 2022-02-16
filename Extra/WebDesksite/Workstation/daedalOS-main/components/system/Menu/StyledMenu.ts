import { motion } from "framer-motion";
import styled from "styled-components";

type StyledMenuProps = {
  $isSubMenu: boolean;
  $x: number;
  $y: number;
};

const StyledMenu = styled(motion.nav)<StyledMenuProps>`
  background-color: rgb(43, 43, 43);
  border: 1px solid rgb(160, 160, 160);
  box-shadow: 1px 1px 1px hsla(0, 0%, 20%, 70%),
    2px 2px 2px hsla(0, 0%, 10%, 70%);
  color: rgb(255, 255, 255);
  contain: layout;
  font-size: 12px;
  height: max-content;
  max-height: fit-content;
  max-width: fit-content;
  padding: 4px 2px;
  position: absolute;
  transform: ${({ $x, $y }) => `translate(${$x}px, ${$y}px);`};
  width: max-content;
  z-index: ${({ $isSubMenu }) => $isSubMenu && 1};

  ol {
    li.disabled {
      color: rgb(110, 110, 110);
      pointer-events: none;
    }

    hr {
      background-color: rgb(128, 128, 128);
      height: 1px;
      margin: 3px 8px;
    }

    figure {
      display: flex;
      padding: 3px 0;

      &:hover,
      &.active {
        background-color: rgb(65, 65, 65);
      }

      figcaption {
        margin-left: 32px;
        margin-right: 64px;
        position: relative;
        top: -1px;
        width: max-content;

        &.primary {
          font-weight: 700;
        }
      }

      img {
        margin: 0 -24px 0 8px;
      }

      svg {
        fill: #fff;
        height: 13px;
        margin-top: 1px;
        position: absolute;
        width: 13px;

        &.left {
          left: 8px;
        }

        &.right {
          right: 8px;
        }
      }
    }
  }
`;

export default StyledMenu;
