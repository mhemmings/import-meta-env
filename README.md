# import.meta.env

[![CI](https://github.com/iendeavor/import-meta-env/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/iendeavor/import-meta-env/actions/workflows/ci.yml)

- 🔑 [Twelve-Factor App](https://12factor.net/config) Ready
- ⚡️ Zero Configuration
- 💡 Easy-to-Use
- 🛠️ Test Runner Support

## Packages

| Package                                           | Version (click for changelogs)                                                                                              | Description                                                                                                                                                                                                                                                            |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@import-meta-env/cli](./packages/cli#readme)     | [![@import-meta-env/cli version](https://img.shields.io/npm/v/@import-meta-env/cli.svg)](./packages/cli/CHANGELOG.md)       | A binary package is used to inject environment variables into those placeholders.                                                                                                                                                                                      |
| [@import-meta-env/vite](./packages/vite#readme)   | [![@import-meta-env/vite version](https://img.shields.io/npm/v/@import-meta-env/vite.svg)](./packages/vite/CHANGELOG.md)    | Inject environment variables into the `import.meta.env` object **_after_** building the application instead of statically replacing it during production.                                                                                                              |
| [@import-meta-env/babel](./packages/babel#readme) | [![@import-meta-env/babel version](https://img.shields.io/npm/v/@import-meta-env/babel.svg)](./packages/babel/CHANGELOG.md) | Provide an approximation of some of [@import-meta-env/vite](https://github.com/iendeavor/import-meta-env/tree/develop/packages/vite) specific transformations when running the code in other environments, for example, running tests with a NodeJS based test runner. |

## License

MIT