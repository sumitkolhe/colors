import { toRgb, withShade, withTint } from './utils'
import type { ColorTransformationFunction } from './utils'

export type ColorVariants = Record<number, ColorTransformationFunction>

const colorVariants: ColorVariants = {
  50: withTint(0.95),
  100: withTint(0.9),
  200: withTint(0.75),
  300: withTint(0.6),
  400: withTint(0.3),
  500: (r: number, g: number, b: number) => [r, g, b],
  600: withShade(0.9),
  700: withShade(0.75),
  800: withShade(0.6),
  900: withShade(0.45),
  950: withShade(0.29),
}

export const getColors = (baseColor: string, variants: ColorVariants = colorVariants) => {
  const [r, g, b] = toRgb(baseColor)

  const result: Record<number, string> = {}

  for (const [name, variantFn] of Object.entries(variants)) {
    const variantNumber = Number.parseInt(name, 10)
    const variantHex = variantFn(r, g, b, 1)
      .map((value: number) => Math.round(value).toString(16).padStart(2, '0').toUpperCase())
      .join('')
    result[variantNumber] = `#${variantHex}`
  }

  return result
}
