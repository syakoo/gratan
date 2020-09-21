import { Coordinate } from '../store/atoms'

// ____________________
//
export const computeDots = (viewSize: number): Coordinate[] => {
  const result: Coordinate[] = []
  const dotsNumW = 19
  const dotHeight = Math.floor(viewSize / dotsNumW)
  const dotWidth = (dotHeight * Math.sqrt(3)) / 2

  for (let i = 0; i < dotsNumW; i++) {
    for (
      let j = Math.ceil(Math.abs((dotsNumW - 1) / 2 - i) / 2);
      j < dotsNumW - Math.floor(Math.abs((dotsNumW - 1) / 2 - i) / 2);
      j++
    ) {
      const dot: Coordinate = {
        x: (i - (dotsNumW - 1) / 2) * dotWidth,
        y: (j - (dotsNumW - 1) / 2) * dotHeight - (i % 2 ? 0 : dotHeight / 2),
      }
      result.push(dot)
    }
  }
  return result
}
