const punto = {
    x: 10,
    y: 15,
    dibujar() {
        console.log("Dibujando ...");
    },
};
delete punto.dibujar;
// verifica si el metodo existe
if('dibujar' in punto){
    punto.dibujar();
}

console.log(Object.keys(punto));
// Acceder a la llave y el valor
for (let llave of Object.keys(punto)){
    console.log(llave, punto[llave])
}

// Devuelve en un arreglo
for (let entry of Object.entries(punto)){
 console.log(entry);
}

// Acceder a la llave y el valor (usar este de preferenia)
for (let llave in punto){
    console.log(llave, punto[llave])
}
