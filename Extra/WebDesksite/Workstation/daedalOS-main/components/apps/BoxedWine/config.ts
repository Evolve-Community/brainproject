import processDirectory from "contexts/process/directory";

const { height, width } = processDirectory["BoxedWine"].defaultSize || {};

const configParams = {
  "inline-default-ondemand-root-overlay": "/wine1.7.55-v8-min-online",
  ondemand: "root",
  resolution: `${width}x${height}`,
  root: "/fullWine1.7.55-v8",
};

export const libs = [
  "/Program Files/BoxedWine/browserfs.boxedwine.js",
  "/Program Files/BoxedWine/jszip.min.js",
  "/Program Files/BoxedWine/boxedwine-shell.js",
  "/Program Files/BoxedWine/boxedwine.js",
];

export const getConfig = (dynamicConfig: Record<string, string>): string =>
  [...Object.entries(configParams), ...Object.entries(dynamicConfig)]
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
