let nombre = "Luis";
let universidad = "UNI";
let edad = 26;

let persona = {}; // objeto vacio

let persona2 = {
    nombre: "Luis",
    universidad: "UNI",
    edad: 16, // de manera opcional es la coma al final
}

console.log(persona2);
// Javascript no asegura el orden de las propiedades cuando se muestra en pantalla
console.log(persona2.edad);
console.log(persona2['universidad']);

persona2.edad = 24;
persona2['edad'] = 24;

delete persona2.universidad; // elimina universidad