# @import-meta-env/unplugin

[![CI](https://github.com/iendeavor/import-meta-env/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/iendeavor/import-meta-env/actions/workflows/ci.yml)
[![NPM version](https://img.shields.io/npm/v/@import-meta-env/unplugin.svg)](https://www.npmjs.com/package/@import-meta-env/unplugin)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

This plugin helps us inject environment variables into the `import.meta.env` object **_after_** building the application instead of statically replacing it during production.

<br>

This project use [SemVer](https://semver.org/) for versioning. For the versions available, see the tags on this repository.

## Motivation

Environment variables should be easy to change between deployments **_without_** rebuilding the application or even changing any code, so we should set environment variables on the system instead of checking them into a repository with `.env` files.

During production, this plugin generates chunks with placeholders, which allow us to statically replace environment variables **_after_** building the application (don't worry, we provide an executable for this, you don't need to write them yourself) .

## 🚀 Quick Start

Install and register the plugin:

```sh
$ npm i dotenv @import-meta-env/unplugin @import-meta-env/cli
```

<details>
<summary>Vite</summary>

```ts
// vite.config.ts
import ImportMetaEnvPlugin from "./@import-meta-env/unplugin";

export default {
  plugins: [
    ImportMetaEnvPlugin.vite({
      /* options */
    }),
  ],
};
```

</details>

<details>
<summary>Rollup</summary>

```js
// rollup.config.js
import ImportMetaEnvPlugin from "./@import-meta-env/unplugin";

export default {
  plugins: [
    ImportMetaEnvPlugin.rollup({
      /* options */
    }),
  ],
};
```

</details>

<details>
<summary>Webpack</summary>

```js
// webpack.config.js
module.exports = {
  plugins: [
    require("./@import-meta-env/unplugin").webpack({
      /* options */
    }),
  ],
};
```

</details>

<details>
<summary>Esbuild</summary>

```js
// esbuild.config.js
import { build } from "esbuild";

build({
  plugins: [
    require("./@import-meta-env/unplugin").esbuild({
      /* options */
    }),
  ],
});
```

</details>

Create a `.env.example` file in the root of your project:

```sh
# .env.example
# To prevent exposure of sensitive credentials to clients,
# only the keys defined in this file can be accessed.
S3_BUCKET=
```

Add `.env` file to .gitignore, and create a `.env` file in the project's root directory:

(⚠ This step is completely optional, you should set environment variables directly on your system if you can.)

```sh
# .env
S3_BUCKET="YOURS3BUCKET"
SECRET_KEY="YOURSECRETKEYGOESHERE"
```

`import.meta.env` now has the keys and values you defined on your system:

```ts
console.log(import.meta.env.S3_BUCKET); // "YOURS3BUCKET"
console.log(import.meta.env["S3_BUCKET"]); // "YOURS3BUCKET", dynamic key also works
console.log(import.meta.env.SECRET_KEY); // undefined
```

Finally, before serving your application, remember to execute [`import-meta-env`](https://github.com/iendeavor/import-meta-env/tree/main/packages/cli#readme) binary to inject environment variables.

Adjust the preview script in your package.json:

```json
{
  "scripts": {
    // If you have a `.env` file:
    "preview": "import-meta-env && vite preview",
    // If you don't have a `.env` file:
    "preview": "cross-env S3_BUCKET=YOURS3BUCKET import-meta-env && vite preview"
  }
}
```

See also:

- [examples](./examples)
- [@import-meta-env/babel](https://github.com/iendeavor/import-meta-env/tree/main/packages/babel) - Provide an approximation of this plugin's specific transformations when running the code in other environments, for example, running tests with a NodeJS based test runner.
- [@import-meta-env/cli](https://github.com/iendeavor/import-meta-env/tree/main/packages/cli) - A binary package is used to inject environment variables into those placeholders.

## 📖 API

Please see [types.ts](./src/types.ts)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details