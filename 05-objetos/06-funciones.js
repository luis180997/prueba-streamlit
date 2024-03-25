// Las funciones son objetos de primera clase

function Usuario(nombre){
    this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length); // cantidad de argumentos que recibe una funcion

const U = Usuario;
let user = new U('Luis');

console.log(user);

function of(Fn, arg) { // se puede pasar funciones como argumento a otras funciones
    return new Fn(arg);
}

let user1 = of(Usuario, 'luis');
console.log(user1)

function returned() { // las funciones pueden ser retornadas por otras funciones
    return function() {
        console.log("Hola mundo");
    }
}

let saludo = returned();
saludo();
