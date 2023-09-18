export function plusOneEach(arr: number[]): number[] {
    
    for (let i = 0; i < arr.length; i++) {
        arr[i] += 1;
    }
    
    return arr;
}
