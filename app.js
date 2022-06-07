/* 
RETO NÚMERO 5
Crear un arreglo de Strings y ordenarlo de mayor a menor seún la cantidad de letras que tenga cada palabra.
Nota: en caso de ser iguales en longitud, guardar una sola palabra de manera aleatoria.
*/

/* Se parte de un arreglo inical con los strings */
var arrayFruits = ["Manzana", "Pera", "Durazno", "Maracuyá", "Sandía", "Fresa", "Melocotón"];
console.log('Arreglo inicial');
console.log(arrayFruits);
/* Se crean los arreglos y el mapa a utilizar */
var lengthStrings = new Map();
var lengthFruit = [];
var shuffle = [];
var belong = [];
var listFruits = [];
/* Se crea una función para darle aleatoriedad */
function shuffleArray(arrayS) {
    return arrayS.sort(() => Math.random() - 0.5);
}
/* Se ejecuta la función para la aleatoriedad de manera que garantice que para cada ejecución exista una alta probailidad de que se elimine el elemento que se repite en logintud */
shuffle = shuffleArray(arrayFruits);
console.log('Array mezclado');
console.log(shuffle);
/* Se extrae las longitudes de cada string y se guardan en un arreglo */
for (let index = 0; index < shuffle.length; index++) {
    element = shuffle[index].length;
    lengthFruit.push(element);
}

/* El arreglo de longitudes se convierte a set que es un tipo colección de valores que admite un único valor */
var shuffleSet = new Set(lengthFruit);
/* El Set se convierte a un array */
var arrayFinal = Array.from(shuffleSet);

/* Se realiza la comparación entre el array antes de realizar el set y despúes para obtener la posición de los elementos en el array original */
for (let index = 0; index < lengthFruit.length; index++) {
    if (lengthFruit[index] == arrayFinal[index]) {
        belong.push(index);
    } else if (lengthFruit[index + 1] == arrayFinal[index] && arrayFinal[index] != undefined) {
        belong.push(index + 1)
    }
}

/* Se agrega a un array los elementos elementos cuya longitud aparece una única vez en el arreglo original */
for (let index = 0; index < belong.length; index++) {
    let add = belong[index]
    listFruits.push(arrayFruits[add]);
}

console.log('Mostrando los elementos aleatorios y sin el elemento cuya longitud coincide con la de otro');
console.log(listFruits);
/* Agregando los elementos al mapa */
for (let index = 0; index < arrayFinal.length; index++) {
    lengthStrings.set(arrayFinal[index], listFruits[index])
}
console.log(lengthFruit);
console.log(arrayFinal);

/* Organizando las longitudes de cada palabra de menor a mayor*/
for (let index = 0; index < arrayFinal.length; index++) {

    a = arrayFinal[index];
    b = arrayFinal[index + 1];
    arrayFinal.sort(function(a, b) { return a - b });
}
/* Mostrando los resultados en consola de manera ordenada*/
for (let index = 0; index < arrayFinal.length; index++) {
    console.log(lengthStrings.get(arrayFinal[index]))

}