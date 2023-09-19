/*export function pick<T extends object, K extends keyof T>(
    obj: T,
    keys: K[]
): Pick<T, K> {
    let pickedObject = {}  // Create an empty object of the desired type

    // Iterate through the keys array
    for (let key of keys) {
        // Check if the key exists in the original object
        if (obj[key]) {
            // Assign the key-value pair to the new object
            pickedObject[key] = obj[key];
        }
    }

    return pickedObject; // Return the new object with selected keys and values
}*/
