function suma(a, b) {
    console.log(arguments); // muestra todos los argumentos
    return a + b; 
}

let resultado = suma(5, 6);
console.log(resultado);
console.log(typeof suma(5, 6));

/*
- Expressions -> expresiones
Es cualquier linea de codigo que evalua un valor
Ejm:
4+6, x=4, miFuncion()

- Declaration -> declaracion
Es cuando creas algo que vas a referencia en el futuro
Ejm: 
let, const, function*, async function*, class, export/import

- Statement -> declaracion
De lo contrario
Ejm:
if, for, else, switch
*/
