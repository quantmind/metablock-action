import core from "@actions/core";
import github from "@actions/github";

const deploy = () => {
  const { context } = github;
  const metablockToken = core.getInput("metablock-token", { required: true });
  const metablockId = core.getInput("metablock-block-id");
};
