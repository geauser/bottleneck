# Bottleneck

## Installation

### `NPM`

```bash
npm install @geauser/bottleneck -S
```

### `Yarn`

```bash
yarn add @geauser/bottleneck -S
```

## Usage

```js
const { objectExport } = require('@geauser/bottleneck');

module.exports = objectExport({
  matching: [ '*.service.js' ],
  cwd: __dirname,
  onRename: (name) => name + 'Service',
});
```
