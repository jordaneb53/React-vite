// Compteur de voyelles
// Écrire une fonction qui réalise ceci:
// Renvoie le nombre de voyelles dans une chaîne de caractères donnée.
// Les voyelles sont: a, e, i, o, u et y.
// La chaîne d'entrée ne sera composée que de lettres minuscules et/ou d'espaces.

function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u" || str[i] === "y") {
            count += 1;
        }
    }
    return count;
}
const result = countVowels("hello world");
console.log(result);