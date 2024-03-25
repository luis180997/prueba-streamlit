let i = 0;

while (i < 10) {
    if (i % 2 == 0){
        console.log("numero par", i)
    }
    i++;
}


while (i < 2) {
    if (i % 2 == 0){
        console.log("numero par", i)
    }
    i++;
}

do {
    if (i % 2 == 0){
        console.log("numero par", i)
    }
    i++;
} while (i < 2);

/* Bucles */

/* 
    Indeterminados - No sabemos el número de veces que se va a ejecutar el código

    Bucle while
    while(condición){
        //código a ejecutar
    }    

    Bucle do...while
    do{
        //código a ejecutar
    }while(condición)
*/

let pass = 'hola';

while(pass != 'hola'){
    pass = prompt('Introduzca su contraseña')
}

console.log('Fin del bucle');

do{
    pass = prompt('Introduzca su contraseña')

}while(pass != 'hola')

