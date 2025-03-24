## Reproduction

This reproduces tests which pass using:
* Node.js [v20.19.0](https://nodejs.org/en/blog/release/v20.19.0)
* Mocha [v11.2.0](https://github.com/mochajs/mocha/releases/tag/v11.2.0)
* @babel/register [7.25.9](https://github.com/babel/babel/releases/tag/v7.25.9)

And fail using:
* Node.js [v20.18.3](https://nodejs.org/en/blog/release/v20.18.3)
* Mocha [v11.2.0](https://github.com/mochajs/mocha/releases/tag/v11.2.0)
* @babel/register [7.25.9](https://github.com/babel/babel/releases/tag/v7.25.9)

### Node.js [v20.19.0](https://nodejs.org/en/blog/release/v20.19.0)

❌ Mocha tests (using Babel register) fail:

```shell
pnpm test

> mocha "src/**.test.js"

 Exception during run: SyntaxError[ @/src/component.test.js ]: Unexpected token '<'
    at compileSourceTextModule (node:internal/modules/esm/utils:340:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:146:18)
    at #translate (node:internal/modules/esm/loader:431:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:478:27)
    at async ModuleJob._link (node:internal/modules/esm/module_job:110:19)
```

✅ Babel register on its own works:

```shell
pnpm start

> node --require @babel/register src/index.js

<p>Test component</p>
```

### Node.js [v20.18.3](https://nodejs.org/en/blog/release/v20.18.3)

✅ Mocha tests (using Babel register) pass:

```shell
pnpm test

> mocha "src/**.test.js"

  component test
    ✔ exports a component


  1 passing (1ms)
```

✅ Babel register on its own works:

```shell
pnpm start

> node --require @babel/register src/index.js

<p>Test component</p>
```
