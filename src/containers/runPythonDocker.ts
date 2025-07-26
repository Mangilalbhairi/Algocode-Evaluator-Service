import { PYTHON_IMAGE } from "../utils/constant";

import createContainer from "./createContainer";
import decodeDockerStream from "./dockerHelper";

async function runPython(code: string, inputTestCase: string) {
  const rawLogBuffer: Buffer[] = [];

  const runCommand = `echo '${code.replace(
    /'/g,
    `'\\"`
  )}' > test.py && echo '${inputTestCase.replace(
    /'/g,
    `'\\"`
  )}' | python3 test.py`;

  const pythonDockerContainer = await createContainer(PYTHON_IMAGE, [
    "/bin/sh",
    "-c",
    runCommand,
  ]);

  await pythonDockerContainer.start();

  const loggerStream = await pythonDockerContainer.logs({
    stderr: true,
    stdout: true,
    timestamps: false,
    follow: true,
  });

  loggerStream.on("data", (chunk) => {
    rawLogBuffer.push(chunk);
  });

  loggerStream.on("end", () => {
    const completeBuffer = Buffer.concat(rawLogBuffer);
    const decodeStream = decodeDockerStream(completeBuffer);
    console.log(decodeStream);
  });

  return pythonDockerContainer;
}

export default runPython;
