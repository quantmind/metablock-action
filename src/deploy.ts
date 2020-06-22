import core from "@actions/core";
import github from "@actions/github";

const deploy = () => {
  const { context } = github;
  const metablockToken = core.getInput("metablock-api-token", { required: true });
  const metablockId = core.getInput("metablock-block-id", { required: true });
  const metablockEnv = core.getInput("metablock-env") || "stage";
  const bundle = core.getInput("metablock-block-id", { required: true });
};

export default deploy;
