# Metablock Action

[![build](https://github.com/quantmind/metablock-action/workflows/build/badge.svg)](https://github.com/quantmind/metablock-action/actions?query=workflow%3Abuild)
[![test](https://github.com/quantmind/metablock-action/workflows/test/badge.svg)](https://github.com/quantmind/metablock-action/actions?query=workflow%3Atest)

Deploy a new version of a block to metablock cloud.

## Inputs

- **token**: Metablock API token, you need to create one on the metablock admin. Alternatively set the `METABLOCK_API_TOKEN` environment variable.
- **block**: Metablock Block ID. Alternatively set the `METABLOCK_BLOCK_ID` environment variable.
- **env**: environment where to deploy, either `stage` or `prod`, (it defaults to `stage` if not provided)


Check the [test.yml](./.github/workflow/test.yml) manifest file for an example where pull requests to master are deployed to `stage` and a merge to `master` to `prod`.
