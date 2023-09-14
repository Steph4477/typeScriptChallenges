export function substring(str: string, start: number, end: number): string{
    
    // Avec méthode :
    // return str.substring(start, end)

    //////////////////////////////////////////
    // test algo sans passer par la methode //
    /////////////////////////////////////////
    
    let result = "" // initialisation de la chaîne de caractères
     
    for (let i = start; i<= end; i++ ) { // parcours de la chaîne
        result += str[i]; // À chaque itération, un caractère de 'str' est ajouté à 'result'
    }

    return result
}