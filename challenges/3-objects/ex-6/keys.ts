export function keys<T extends {}>(obj: T): string[]{
    return Object.keys(obj)
}