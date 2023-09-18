export function intersection<T>(array1: T[], array2: T[]): T[] {
    const set1 = new Set(array1);
    const result: T[] = [];

    for (const item of array2) {
        if (set1.has(item)) {
            result.push(item);
        }
    }

    return result;
}