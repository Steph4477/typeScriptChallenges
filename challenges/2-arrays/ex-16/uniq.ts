export function uniq<T>(array: T[]): T[]{
    const uniqArray = Array.from(new Set(array)) // create uniqArray with Set from orignal array 
    return uniqArray
}
