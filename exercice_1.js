// Écrire une fonction qui réalise ceci:
// Renvoie un tableau contenant les nombres de 1 à N, où N est le paramètre.
// 
// Certaines valeurs sont toutefois remplacées si l'une des conditions suivantes est remplie :
// Si la valeur est un multiple de 3 : utiliser la valeur "Fizz" à la place.
// Si la valeur est un multiple de 5 : utiliser la valeur "Buzz" à la place
// Si la valeur est un multiple de 3 & 5 : utiliser la valeur "FizzBuzz" à la place.
// 
// N ne sera jamais inférieur à 1.
// 
// Exemple d'appel de méthode :
// 
// fizzbuzz(3)-- > [1, 2, "Fizz"]

function fizzbuzz(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }
    return result;
}

console.log(result(20));   