export function forEach<T>(array: T[], callback: (item: T, index: number) => void): void {
    array.forEach((item, index) => {
        callback(item, index)
    })
}   
