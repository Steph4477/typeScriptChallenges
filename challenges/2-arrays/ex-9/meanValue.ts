export function meanValue(array: number[]): number{

    let sum = 0
    for (const value of array){
        sum += value
    }

    const arrayLength = array.length
    
    return sum/arrayLength
}