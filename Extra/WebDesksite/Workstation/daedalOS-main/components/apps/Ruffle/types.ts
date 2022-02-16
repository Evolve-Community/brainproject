type BaseLoadOptions = {
  allowScriptAccess?: boolean;
  backgroundColor?: string | null;
  letterbox?: "fullscreen" | "off" | "on";
};

type Config = {
  polyfills?: boolean;
};

type DataLoadOptions = {
  data: Iterable<number>;
};

export type RufflePlayer = HTMLElement & {
  load: (options: BaseLoadOptions & DataLoadOptions) => Promise<void>;
};

type SourceAPI = {
  createPlayer: () => RufflePlayer;
};

type PublicAPI = {
  config: BaseLoadOptions & Config;
  newest: () => SourceAPI;
};

declare global {
  interface Window {
    RufflePlayer?: PublicAPI;
  }
}
