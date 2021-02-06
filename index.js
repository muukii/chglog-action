const core = require("@actions/core");

// most @actions toolkit packages have async methods
async function run() {
  try {
    const left = core.getInput("left");
    const right = core.getInput("right");

    // const ms = core.getInput("milliseconds");
    // core.info(`Waiting ${ms} milliseconds ...`);
    // core.info(new Date().toTimeString());
    core.setOutput("time", new Date().toTimeString());
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
