# OneXP

> The original OneSquad experience

[![NPM](https://img.shields.io/npm/v/onexp.svg)](https://www.npmjs.com/package/onexp) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save onexp
```

## Usage

```jsx
import React, { Component } from 'react'

import Button from 'onexp'

class Example extends Component {
  render () {
    return (
      <Button label="Click me!" />
    )
  }
}
```

## Development
Make changes to component library code in `src` folder.
Make changes to example preview code in `example` folder.

Run Rollup compile and watcher using `yarn start` from root folder.
Run development server for example preview using `yarn start` from `example` folder.

All file changes are automatically recompiled and the preview server automatically reloads.
Preview changes at `localhost:3000`

## License

MIT © [vinay0x](https://github.com/vinay0x)
