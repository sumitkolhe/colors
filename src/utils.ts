export type ColorVariantFunction = (r: number, g: number, b: number, intensity: number) => number[]

export function toRgb(color: string): number[] {
  const hexMatch = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(color)
  const shortHexMatch = /^#?([\da-f])([\da-f])([\da-f])$/i.exec(color)
  const rgbMatch = /^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/i.exec(color)

  if (hexMatch) {
    return hexMatch.slice(1).map((value) => Number.parseInt(value, 16)) as number[]
  } else if (shortHexMatch) {
    return shortHexMatch.slice(1).map((value) => Number.parseInt(value + value, 16)) as number[]
  } else if (rgbMatch) {
    return rgbMatch.slice(1).map((value) => Number.parseInt(value, 10)) as number[]
  } else if (color.includes(',')) {
    return color.split(',').map((value) => Number.parseInt(value.trim(), 10)) as number[]
  }

  throw new Error('Invalid color format! Use #ABC or #AABBCC or rgb(1,2,3)')
}

const applyVariant =
  (variantFn: ColorVariantFunction) =>
  (intensity: number) =>
  (r: number, g: number, b: number): number[] =>
    variantFn(r, g, b, intensity)

export const withTint = applyVariant((r, g, b, intensity) => [
  r + (255 - r) * intensity,
  g + (255 - g) * intensity,
  b + (255 - b) * intensity,
])
export const withShade = applyVariant((r, g, b, intensity) => [
  r * intensity,
  g * intensity,
  b * intensity,
])
