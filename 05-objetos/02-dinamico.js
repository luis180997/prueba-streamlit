const user = {id: 1}; // no puede dejar de ser objetopero si cambiar y agregar propiedades del objeto

user.name = 'Nicolas';
user.guardar = function (){
    console.lo("Guardando", user.name);
}

user.guardar();

delete user.name;
delete user.guardar;
console.log(user);

const user1 = Object.freeze({id: 1}); // no se va poder cambiar las propiedades ni valores
const user2 = Object.seal({id: 1}); // no se puede cambiar las propiedades pero si los valores
user1.name = 'luis';
user1.id = 2;
console.log(user1);