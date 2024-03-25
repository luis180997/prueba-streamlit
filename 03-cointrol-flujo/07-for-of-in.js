
let animales = ['leon', 'perro', 'gato'];

for (let animal of animales) {
    console.log(animal);
}

let i = 0;
while (i < animales.length){
    console.log(animales[i]);
    i++;
}

let user = {
    id: 1,
    name: 'leon',
    age: 25,
};

for (let prop in user){
    console.log(prop); // muestra el nombre de la propiedad
    console.log(user[prop]); // muestra el valor de la propiedad
}

let animales1 = ['leon', 'perro', 'gato'];

for (let indice in animales1) {
    console.log(indice, animales1[indice]);
}


/* Bucles */

/* 
    Determinados

    bucle for of / for in

    for(let variable of estructura){
        Código a ejecutar
    }

    Palabras reservadas de bucles

        break - Rompe el bucle
        continue - Se salta la(s) posicion(es) que le indequemos y después continúa su ejecución
*/

let names = ['Paco', 'José', 'Paula', 'María']

for (let i = 0; i < names.length; i++){
    if(names[i]==='Paula'){
        continue
    }
    console.log(names[i]);
}

for(let name of names){
    if(name==='Paula'){
        continue
    }
    console.log(name);
}

for(let index in names){
    if(names[index]==='Paula'){
        continue
    }
    console.log(index);
}

// for in ayuda a obtener el indice
// for of ayuda a obtener el valor