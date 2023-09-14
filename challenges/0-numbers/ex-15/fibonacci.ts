
export function fibonacci(n: number): number {
    let n1 = 0;
    let n2 = 1;
    let somme = 0;
    if (n == 0) {
        return n1;
    }
    for(let i = 2; i <= n; i++){
        //somme des deux derniers nombres
        somme = n1 + n2;
        //assigner la dernière valeur à la première
        n1 = n2;
        //attribuer la somme au dernier
        n2 = somme;
    }
    return n2;
}

