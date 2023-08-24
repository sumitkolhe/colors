# 🎨 Colors

A small utility library to generate different shades for tailwind

Install:

```bash
yarn add @kolhe/colors
```

## 🔍 Usage

```js
import { getColors } from '@kolhe/colors'

// using hex
const theme = getColors('#FF5555')

// using rgb
const theme = getColors('255,85,85')
```

```js
{
  0: '#FFFFFF',
  50: '#FFF2F2',
  100: '#FFE6E6',
  200: '#FFBFBF',
  300: '#FF9999',
  400: '#FF4D4D',
  500: '#FF0000',
  600: '#E60000',
  700: '#BF0000',
  800: '#990000',
  900: '#730000',
  950: '#4A0000',
  1000: '#000000'
}
```

## 📜 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the [LICENSE](LICENSE) file for details.
