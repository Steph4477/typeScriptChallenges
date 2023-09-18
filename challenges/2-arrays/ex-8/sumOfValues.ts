export function sumOfValues(array: number[]): number{
    //intialize sum
    let sum = 0;
    // loop that takes values ​​from the array
    for (const value of array) {
        // add sum
        sum += value;
    }

    return sum;
}