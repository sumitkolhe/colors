import { expect, test } from 'vitest'
import { getColors } from '../src/index'
import { toRgb } from '../src/utils'

const fixture = {
  hex: '#ABABAB',
  rgb: '171, 171, 171',
  theme: {
    '50': '#FBFBFB',
    '100': '#F7F7F7',
    '200': '#EAEAEA',
    '300': '#DDDDDD',
    '400': '#C4C4C4',
    '500': '#ABABAB',
    '600': '#9A9A9A',
    '700': '#808080',
    '800': '#676767',
    '900': '#4D4D4D',
    '950': '#323232',
  },
}

test('getColors (hex)', () => {
  expect(getColors(fixture.hex)).toMatchObject(fixture.theme)
})

test('getColors (rgb)', () => {
  expect(getColors(fixture.rgb)).toMatchObject(fixture.theme)
})

test('getColors (invalid)', () => {
  expect(() => getColors('red')).toThrowError(/Invalid color format!/)
})

test('getColors (invalid obj)', () => {
  expect(() => getColors('')).toMatchObject({})
})

test('getColors (shorthand)', () => {
  expect(toRgb('#09C')).toEqual(toRgb('#0099cc'))
})
