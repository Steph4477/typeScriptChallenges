export function parseInt(str: string): number {
    // parseFloat pour traiter les nombres décimaux (avec point ou virgule)
    const parsedFloat = parseFloat(str);
  
    // isNaN pour vérifier si le résultat n'est pas un nombre
    if (isNaN(parsedFloat)) {
      return NaN;
    }
  
    // Math.floor pour convertir le nombre en entier
    return Math.floor(parsedFloat);
  }
  