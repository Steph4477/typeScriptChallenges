export function removeItemAtIndex<T>(array: T[], index: number): T[]{
    // This line creates a new array by combining the elements before 
    // and after the specified index, which excludes the element at that index.
    return [...array.slice(0, index), ...array.slice(index + 1)]
}