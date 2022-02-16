import type { MotionProps } from "framer-motion";
import { useTheme } from "styled-components";
import {
  MILLISECONDS_IN_SECOND,
  TRANSITIONS_IN_MILLISECONDS,
} from "utils/constants";
import { pxToNum } from "utils/functions";

const usePeekTransition = (): MotionProps => {
  const {
    sizes: { taskbar },
  } = useTheme();
  const peekContainerHeight =
    pxToNum(taskbar.entry.peekImage.height) +
    pxToNum(taskbar.entry.peekImage.margin) * 2;

  return {
    animate: "active",
    exit: "initial",
    initial: "initial",
    transition: {
      duration: TRANSITIONS_IN_MILLISECONDS.WINDOW / MILLISECONDS_IN_SECOND,
      ease: "easeInOut",
    },
    variants: {
      active: {
        height: peekContainerHeight,
        opacity: 1,
      },
      initial: {
        height: 0,
        opacity: 0,
      },
    },
  };
};

export default usePeekTransition;
