import type { LocalEcho } from "components/apps/Terminal/types";
import { loadFiles } from "utils/functions";

type Pyodide = {
  runPythonAsync: (code: string) => Promise<string>;
};

type PyError = Error & { message: string };

declare global {
  interface Window {
    loadPyodide: (cfg: { indexURL: string }) => Promise<Pyodide>;
    pyodide?: Pyodide;
  }
}

const config = {
  indexURL: "/Program Files/Pyodide/",
};

const versionCommand = `
import sys
sys.version
`;

const captureStdOut =
  "import sys\r\nimport io\r\nsys.stdout = io.StringIO()\r\n";

export const runPython = async (
  code: string,
  localEcho: LocalEcho
): Promise<void> => {
  await loadFiles(["/Program Files/Pyodide/pyodide.js"]);

  if (!window.pyodide && window.loadPyodide) {
    window.pyodide = await window.loadPyodide(config);
  }

  if (window.pyodide) {
    const getVersion = code === "ver" || code === "version";

    try {
      const result = await window.pyodide.runPythonAsync(
        getVersion ? versionCommand : captureStdOut + code
      );
      const stdOut = await window.pyodide.runPythonAsync(
        "sys.stdout.getvalue()"
      );

      if (result) localEcho?.println(result.toString());
      if (stdOut) localEcho?.println(stdOut.toString());
    } catch (error) {
      const { message } = error as PyError;

      if (message) localEcho?.println(message);
    }
  }
};
