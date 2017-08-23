# scan-ports

Scan ports.

## Installation

```
npm install scan-ports --save
```

## Usage

<!-- eslint-disable strict -->

```js
const scanPorts = require('scan-ports')

scanPorts('npmjs.com', [80, 8000])
/*
{
  80: true,
  8000: false,
}
*/
```
