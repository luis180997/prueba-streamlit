

function Usuario() { // por convencion la primera letra es mayuscula para funciones constructoras
    this.id = 1;
    this.recuperarClace = function () { // metodo (funcion que fue asignada a un objeto)
        console.log("Recuperar clabe ...");
    }
}

let usuario = new Usuario();

console.log(usuario)