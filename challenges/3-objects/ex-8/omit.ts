export function omit<T extends object, K extends keyof T>(
    obj: T,
    keys: K[]
): Omit<T, K> {
    const result = { ...obj };

    for (const key of keys) {
        // Check if the key exists in the object before omitting
        if (key in result) {
            delete result[key];
        }
    }

    return result;
    

}