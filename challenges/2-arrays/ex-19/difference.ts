export function difference<T>(array: T[], values: T[]): T[] {
    const valueSet = new Set(values);
    const differenceArray: T[] = [];

    for (const item of array) {
        if (!valueSet.has(item)) {
            differenceArray.push(item);
        }
    }

    return differenceArray;
}