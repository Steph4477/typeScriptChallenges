export function removeFirstItem<T>(array: T[]): T[]{
    // copy the array begin to index 1
    return array.slice(1)
}