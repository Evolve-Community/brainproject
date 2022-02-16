import type { Size } from "components/system/Window/RndWindow/useResizable";
import type { Processes } from "contexts/process/types";
import type { WindowState } from "contexts/session/types";
import type { Position } from "react-rnd";
import { PROCESS_DELIMITER } from "utils/constants";
import { pxToNum, viewHeight, viewWidth } from "utils/functions";

export const cascadePosition = (
  id: string,
  processes: Processes,
  stackOrder: string[],
  offset = 0
): Position | undefined => {
  const [pid] = id.split(PROCESS_DELIMITER);
  const processPid = `${pid}${PROCESS_DELIMITER}`;
  const parentPositionProcess =
    stackOrder.find((stackPid) => stackPid.startsWith(processPid)) || "";
  const { componentWindow } = processes?.[parentPositionProcess] || {};
  const {
    x = 0,
    y = 0,
    width = 0,
    height = 0,
  } = componentWindow?.getBoundingClientRect() || {};
  const isOffscreen =
    x + offset + width > viewWidth() || y + offset + height > viewHeight();

  return !isOffscreen && (x || y)
    ? {
        x: x + offset,
        y: y + offset,
      }
    : undefined;
};

export const centerPosition = (
  { height, width }: Size,
  taskbarHeight: string
): Position => {
  const [vh, vw] = [viewHeight(), viewWidth()];

  return {
    x: Math.floor(vw / 2 - pxToNum(width) / 2),
    y: Math.floor((vh - pxToNum(taskbarHeight)) / 2 - pxToNum(height) / 2),
  };
};

export const isWindowOutsideBounds = (
  windowState: WindowState,
  bounds: Position
): boolean => {
  const { position, size } = windowState || {};
  const { x = 0, y = 0 } = position || {};
  const { height = 0, width = 0 } = size || {};

  return (
    x < 0 ||
    y < 0 ||
    x + pxToNum(width) > bounds.x ||
    y + pxToNum(height) > bounds.y
  );
};
