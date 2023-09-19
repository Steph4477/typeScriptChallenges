export function setProperty<T, K extends keyof T>(
    object: T,
    key: K,
    value: T[K]
): T {
    return {
        ...object,
        [key]: value,
    };
}
