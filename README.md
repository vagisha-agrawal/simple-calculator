# simple-calculator

> input two number and do simple calculation of &quot;+&quot;,&#x27;-&#x27;,&#x27;/&#x27;,&#x27;*&#x27;

[![NPM](https://img.shields.io/npm/v/simple-calculator.svg)](https://www.npmjs.com/package/simple-calculator) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i @tangisha/simple-calculator
```

## Important point
Install bootstrap and import it in your root file so that its UI looks better

## Usage

```jsx
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import {Maths} from 'simple-calculator'
import 'simple-calculator/dist/index.css'

const App = () => {
  return <Maths table={false}/>
}
```

# Its Functionality
There is a table will be formed everytime you calculate so you can use that expression in future. If you dont want that table, just pass ```return <Maths table={false}/>``` as a props.

The table will be formed after clicking on "=" primary button which will render in the browser

## License

MIT © [vagisha-agrawal](https://github.com/vagisha-agrawal)
