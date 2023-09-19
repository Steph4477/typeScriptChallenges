export function values<T>(obj: { [key: string]: T }): T[]{
    return Object.values(obj)
}