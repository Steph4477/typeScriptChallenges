export function arrayRotate<T>(array: T[], positions: number): T[] {
  const result = array.slice(positions).concat(array.slice(0, positions))
  return result
}


