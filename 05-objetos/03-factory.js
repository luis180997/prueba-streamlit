let user = {
    email: 'luis@gmail.com',
    name: 'Luis',
    direccion: {
        calle: 'lima',
        numero: 108,
    },
    activo: true,
    recuperarClave: function () {//funcion sin nombre
        console.log("Recuperando clave");
    }, 
}

// funcion para la creacion de objetos con las mismas propiedades
function crearUsuario(name, email) {
    return {
        email,
        name,
        activo: true,
        recuperarClave: function () {//funcion sin nombre
            console.log("Recuperando clave");
        }, 
    }
}

let user1 = crearUsuario('Manuel', 'manuel@gmail.com');