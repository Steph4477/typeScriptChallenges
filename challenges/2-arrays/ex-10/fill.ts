export function fill<T>(array: T[], value: T): T[] {
    // I declare resultArray as an array ([]) which can contain elements of generic type T, 
    // whose type will be specified when calling this function.
    
    const resultArray: T[] = [];
  
    for (let i = 0; i < array.length; i++) {
      resultArray.push(value);
    }
  
    return resultArray;
  }
  