# Metablock Action

[![build](https://github.com/quantmind/metablock-action/workflows/build/badge.svg)](https://github.com/quantmind/metablock-action/actions?query=workflow%3Abuild)

Deploy a new version of a block to metablock cloud.

## Inputs

- **metablock-token** (required): Metablock API token (you need to create one on the metablock admin)
- **metablock-block-id** (required): Metablock Block ID
- **metablock-env**: environment where to deploy, either `staging` or `prod`, (it defaults to `staging` if not provided)
