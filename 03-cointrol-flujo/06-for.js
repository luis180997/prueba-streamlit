/*
let i = 0;

while (i < 10) {
    if (i % 2 == 0){
        console.log("numero par", i)
    }
    i++;
}
*/

for (let i = 0; i<4; i++) {
    if (i % 2 == 0){
        console.log("numero par", i)
    }
}


/* Bucles */

/* 
    Determinados

    bucle for

    Su sintaxis se compone de 3 partes
        Iniciación de variable
        Número de vueltas
        Incremento o decremento

    for(let i=0;i<=10;i++){
        Código a ejecutar
    }
*/

let numbers = [56,14,23,37,41,59]

for(let i=0;i<=numbers.length;i++){
    console.log(`i vale ${i} y el valor de esa posición en el array es ${numbers[i]}`);
}

