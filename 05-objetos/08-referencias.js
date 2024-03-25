let a = 1;
let b = a;

b++;
console.log(a,b); // 1, 2

// Con objetos
let a1 = {};
let b1 = a1;

b1.prop = 1;
console.log(a1,b1); // 1, 1

// Con funciones
let a3 = 1;

function suma(n){
    n++;
}
suma(a3);
console.log(a3); // 1 , el rewsultado no se modifica cono la funcion

// Con funciones y objetos
let a4 = {prop: 1};

function suma(n){
    n.prop++;
}

suma(a4);
console.log(a4); // 2

/*
Los datos primitivos se copian
Los datos de referencias, se referencian (objetos, array, funciones)
*/