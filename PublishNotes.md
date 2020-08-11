This project is bootstrapped by [aurelia-cli](https://github.com/aurelia/cli).

This Aurelia plugin project has a built-in dev app (with CLI built-in bundler and RequireJS) to simplify development.

1. The local `src/` folder, is the source code for the plugin.
2. The local `dev-app/` folder, is the code for the dev app, just like a normal app bootstrapped by aurelia-cli.
3. You can use normal `au run` and `au test` in development just like developing an app.
4. You can use aurelia-testing to test your plugin, just like developing an app.
5. To ensure compatibility to other apps, always use `PLATFORM.moduleName()` wrapper in files inside `src/`. You don't need to use the wrapper in `dev-app/` folder as CLI built-in bundler supports module name without the wrapper.

Note aurelia-cli doesn't provide a plugin skeleton with Webpack setup (not yet), but this plugin can be consumed by any app using Webpack, or CLI built-in bundler, or jspm.
## Build Plugin

Run `au build-plugin`. This will transpile all files from `src/` folder to `dist/native-modules/` and `dist/commonjs/`.

For example, `src/index.ts` will become `dist/native-modules/index.js` and `dist/commonjs/index.js`.

Note all other files in `dev-app/` folder are for the dev app, they would not appear in the published npm package.

## Publish npm package

By default, `"private"` field in package.json has been turned on, this prevents you from accidentally publish a private plugin to npm.

To publish the plugin to npm for public consumption:

1. Remove `"private": true,` from package.json.
2. Pump up project version. This will run through `au test` (in "preversion" in package.json) first.
```shell
npm version patch # or minor or major
```
3. Push up changes to your git server
```shell
git push && git push --tags
```
4. Then publish to npm, you need to have your npm account logged in.
```shell
npm publish
```

## Automate changelog, git push, and npm publish

You can enable `npm version patch # or minor or major` to automatically update changelog, push commits and version tag to the git server, and publish to npm.

Here is one simple setup.
1. `npm i -D standard-changelog`. We use [`standard-changelog`](https://github.com/conventional-changelog/conventional-changelog) as a minimum example to support conventional changelog.
  * Alternatively you can use high level [standard-version](https://github.com/conventional-changelog/standard-version).
2. Add two commands to `"scripts"` section of package.json.
```
"scripts": {
  // ...
  "version": "standard-changelog && git add CHANGELOG.md",
  "postversion": "git push && git push --tags && npm publish"
},
```
3. you can remove `&& npm publish` if your project is private

For more information, go to https://aurelia.io/docs/cli/cli-bundler

## Run dev app

Run `au run`, then open `http://localhost:9000`

To open browser automatically, do `au run --open`.

To change dev server port, do `au run --port 8888`.

To change dev server host, do `au run --host 127.0.0.1`


**PS:** You could mix all the flags as well, `au run --host 127.0.0.1 --port 7070 --open`


## Unit tests

Run `au test` (or `au jest`).

To run in watch mode, `au test --watch` or `au jest --watch`.
