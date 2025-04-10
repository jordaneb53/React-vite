// RGB vers hexadécimale
// Écrire une fonction qui convertit une valeur RGB en sa représentation hexadécimale.Les valeurs décimales valides pour RGB sont comprises entre 0 et 255.
// Remarque: votre réponse doit toujours comporter 6 caractères.L'abréviation 3 ne fonctionne pas ici.
// Exemples(entrée-- > sortie) :
// 
// 255, 255, 255 -- > "FFFFFF"
// 255, 255, 300 -- > "FFFFFF"
// 0, 0, 0 -- > "000000"
// 148, 0, 211 -- > "9400D3"
function toHex(x) {
    return x.toString(16).padStart(2, "0");
}
function ToHexColor(r, g, b) {
    const rh = toHex(r);
    const rg = toHex(g);
    const rb = toHex(b);
    return "#" + rh.toString(16) + rg.toString(16) + rb.toString(16);
}

console.log(ToHexColor(255, 255, 255));