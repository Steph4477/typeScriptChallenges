export function sortArray<T>(array: T[]): T[]{
    const copy = array.slice()
    return copy.sort()
    
}