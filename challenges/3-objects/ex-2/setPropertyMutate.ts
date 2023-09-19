export function setPropertyMutate<T>(
    obj: T,
    key: keyof T,
    value: T[keyof T]
): void {
    obj[key] = value
}