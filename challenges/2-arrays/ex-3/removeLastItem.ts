export function removeLastItem<T>(array: T[]): T[]{
    // I create a new table without its last element. I start from the first element (o) until the penultimate (-1)
    const newArray = array.slice(0, -1);
    return newArray;

}