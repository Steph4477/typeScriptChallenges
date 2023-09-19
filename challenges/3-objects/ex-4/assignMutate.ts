export function assignMutate<T extends {}, U>(target: T, source: U): void{
    Object.assign(target, source)
}