# Introduction

## Prerequisite

To prevent accidentally leaking environment variables to clients, only variables listed in a special _example file_ (for example, `.env.example`) will be exposed to your client source code.

For example, If your environment variables are:

```bash
export API_BASE_URL=https://httpbin.org
export SECRET_KEY=****
```

and `.env.example` is defined as follows, then only `API_BASE_URL` will be exposed, not `SECRET_KEY`:

```ini
# .env.example
API_BASE_URL=
```

## Define Environment Variables

We make no assumptions about the source of environment variables.

1. You can define environment variables in an ad-hoc manner:

   Unix systems:

   ```bash
   $ API_BASE_URL=https://httpbin.org npx import-meta-env --example .env.example
   ```

   Windows (cmd.exe):

   ```
   set "API_BASE_URL=https://httpbin.org" && npx import-meta-env --example .env.example
   ```

   Windows (Powershell):

   ```
   ($env:API_BASE_URL = "https://httpbin.org") -and (npx import-meta-env --example .env.example)
   ```

2. Or you can define environment variables in files:

   ```ini
   # .env.development
   API_BASE_URL=https://httpbin.org
   ```

   and use [dotenv](https://www.npmjs.com/package/dotenv-cli) or [env-cmd](https://www.npmjs.com/package/env-cmd) to load environment variables from that file:

   ```bash
   $ dotenv -e .env.development npx import-meta-env --example .env.example
   ```

## Access Environment Variables

Import-meta-env exposes environment variables on the special `import.meta.env`[<sup>?</sup>](/guide/faq/why-use-import-meta.html) object (inspired by [Vite](https://vitejs.dev/guide/env-and-mode.html)).

```js
// src/index.js
console.log(import.meta.env.API_BASE_URL);
```

## Transform Environment Variables

### Development / Testing

In development and testing, as usual, the [compile-time transform](/guide/getting-started/compile-time-transform.html) tools will simply replace `import.meta.env` with _environment variables_.

### Production

In production, the compile-time transform tool temporarily replaces `import.meta.env` with _placeholders_:

```js
// dist/index.js
console.log("__import_meta_env_placeholder__".API_BASE_URL);
```

Then, at runtime, you need to replace these _placeholders_ with _environment variables_ using the [runtime transform](/guide/getting-started/runtime-transform.html) tool.

```js
// dist/index.js
console.log("https://httpbin.org");
```