// Racine numérique d’un entier
// Écrire une fonction qui calcule la racine numérique d’un entier, c’est - à - dire la somme récursive de tous les chiffres d'un nombre.
// 
// Étant donné n, prenez la somme des chiffres de n.Si cette valeur comporte plus d'un chiffre, continuez à réduire de cette manière jusqu'à ce que vous obteniez un nombre à un seul chiffre.L'entrée sera un nombre entier non négatif.
// Exemples
// 
// 16 -- > 1 + 6 = 7
// 942 -- > 9 + 4 + 2 = 15 -- > 1 + 5 = 6
// 132189 -- > 1 + 3 + 2 + 1 + 8 + 9 = 24 -- > 2 + 4 = 6
// 493193 -- > 4 + 9 + 3 + 1 + 9 + 3 = 29 -- > 2 + 9 = 11 -- > 1 + 1 = 2


function numRacine(n) {
    while (n >= 10) {
        let sum = 0;
        while (n > 0) {
            sum += n % 10;
            n = Math.floor(n / 10);
        }
        n = sum;
    }
    return n;
}

const result = numRacine(493193);
console.log(result); 