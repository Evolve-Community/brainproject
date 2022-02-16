import {
  config,
  libs,
  PROMPT_CHARACTER,
} from "components/apps/Terminal/config";
import { autoComplete } from "components/apps/Terminal/functions";
import type {
  FitAddon,
  LocalEcho,
  OnKeyEvent,
} from "components/apps/Terminal/types";
import useCommandInterpreter from "components/apps/Terminal/useCommandInterpreter";
import type { ExtensionType } from "components/system/Files/FileEntry/extensions";
import extensions from "components/system/Files/FileEntry/extensions";
import { useFileSystem } from "contexts/fileSystem";
import { useProcesses } from "contexts/process";
import useResizeObserver from "hooks/useResizeObserver";
import packageJson from "package.json";
import { extname } from "path";
import { useCallback, useEffect, useState } from "react";
import { HOME } from "utils/constants";
import { haltEvent, isFirefox, loadFiles } from "utils/functions";
import type { IDisposable, Terminal } from "xterm";

const { alias, author, license, name, version } = packageJson;

export const displayLicense = `${license} License`;

export const displayVersion = (): string => {
  const { commit } = window;

  return `${version}${commit ? `-${commit}` : ""}`;
};

const useTerminal = (
  id: string,
  url: string,
  containerRef: React.MutableRefObject<HTMLDivElement | null>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  loading: boolean
): void => {
  const {
    url: setUrl,
    processes: { [id]: { closing = false } = {} },
  } = useProcesses();
  const { readdir } = useFileSystem();
  const [terminal, setTerminal] = useState<Terminal>();
  const [fitAddon, setFitAddon] = useState<FitAddon>();
  const [localEcho, setLocalEcho] = useState<LocalEcho>();
  const [initialCommand, setInitialCommand] = useState("");
  const [prompted, setPrompted] = useState(false);
  const processCommand = useCommandInterpreter(id, terminal, localEcho);
  const autoFit = useCallback(() => fitAddon?.fit(), [fitAddon]);

  useEffect(() => {
    if (url) {
      if (localEcho) {
        localEcho.handleCursorInsert(url);
      } else {
        const fileExtension = extname(url).toLowerCase() as ExtensionType;

        if (
          extensions[fileExtension].process.includes("Terminal") &&
          extensions[fileExtension].command
        ) {
          setInitialCommand(`${extensions[fileExtension].command} ${url}`);
        }
      }

      setUrl(id, "");
    }
  }, [id, localEcho, setUrl, url]);

  useEffect(() => {
    loadFiles(libs).then(() => {
      if (window.Terminal) setTerminal(new window.Terminal(config));
    });
  }, []);

  useEffect(() => {
    if (
      terminal &&
      loading &&
      containerRef.current &&
      window.FitAddon &&
      window.LocalEchoController
    ) {
      const newFitAddon = new window.FitAddon.FitAddon();
      const newLocalEcho = new window.LocalEchoController(undefined, {
        historySize: 1000,
      });

      terminal.loadAddon(newLocalEcho);
      terminal.loadAddon(newFitAddon);
      terminal.open(containerRef.current);

      newFitAddon.fit();

      setFitAddon(newFitAddon);
      setLocalEcho(newLocalEcho);

      containerRef.current.addEventListener("contextmenu", (event) => {
        haltEvent(event);

        const textSelection = terminal.getSelection();

        if (textSelection) {
          navigator.clipboard.writeText(textSelection);
          terminal.clearSelection();
        } else {
          navigator.clipboard
            .readText?.()
            .then((clipboardText) =>
              newLocalEcho.handleCursorInsert(clipboardText)
            );
        }
      });

      setLoading(false);

      if (isFirefox()) terminal.options.letterSpacing = 0;
    }

    return () => {
      if (terminal && closing) terminal.dispose();
    };
  }, [closing, containerRef, loading, setLoading, terminal]);

  useEffect(() => {
    let currentOnKey: IDisposable;

    if (terminal && localEcho) {
      currentOnKey = terminal.onKey(
        ({ domEvent: { ctrlKey, code } }: OnKeyEvent) => {
          if (ctrlKey && code === "KeyV") {
            navigator.clipboard
              .readText?.()
              .then((clipboardText) =>
                localEcho.handleCursorInsert(clipboardText)
              );
          }
        }
      );
    }

    return () => currentOnKey?.dispose();
  }, [localEcho, terminal]);

  useEffect(() => {
    if (localEcho && terminal && !prompted) {
      const prompt = (cd = HOME): Promise<void> =>
        localEcho
          .read(`\r\n${cd}${PROMPT_CHARACTER}`)
          .then((command) => processCommand.current?.(command).then(prompt));

      localEcho.println(`${alias || name} [Version ${displayVersion()}]`);
      localEcho.println(`By ${author}. ${displayLicense}.`);

      if (initialCommand) {
        localEcho.println(
          `\r\n${HOME}${PROMPT_CHARACTER}${initialCommand}\r\n`
        );
        localEcho.history.entries = [initialCommand];
        processCommand.current(initialCommand).then(prompt);
      } else {
        prompt();
      }

      setPrompted(true);
      terminal.focus();
      autoFit();

      readdir(HOME).then((files) => autoComplete(files, localEcho));
    }
  }, [
    autoFit,
    initialCommand,
    localEcho,
    processCommand,
    prompted,
    readdir,
    terminal,
  ]);

  useResizeObserver(containerRef.current, autoFit);
};

export default useTerminal;
