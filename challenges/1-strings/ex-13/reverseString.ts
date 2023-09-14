export function reverseString(str: string): string{
    // "reverse" => split("") =>"r","e","v"...
    return str.split("").reverse().join("");
}