import { toRgb, withShade, withTint } from './utils'
import type { ColorVariantFunction } from './utils'

const colorVariants: Record<string, ColorVariantFunction> = {
  0: withTint(1),
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
  1000: withShade(0),
}

export function getColors(baseColor: string, variants = colorVariants) {
  if (!baseColor) return {}

  const [r, g, b] = toRgb(baseColor)

  return Object.fromEntries(
    Object.entries(variants).map(([name, variantFn]) => [
      name,
      `#${variantFn(r, g, b, 1)
        .map((value: number) => Math.round(value).toString(16).padStart(2, '0').toUpperCase())
        .join('')}`,
    ])
  )
}
