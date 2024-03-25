function Punto(x,y) {
    this.x = x;
    this.y = y;
    this.dibujar = function() {
        console.log("Dibujando ...");
    }
}

// No es recomendable, lo de arriba es lo recomendable
const Point = new Function('x', 'y', 'this.x = x; this.y = y; this.dibujar = function() { console.log("Dibujando ..."); }');

const p = new Point(1,2);
console.log(p);

let punto = {z : 7};
//Punto.call(punto, 1, 2); // permite poder llamar funciones y extender objetos
Punto.apply(punto, [1, 2]); // es lo mismo que call

console.log(punto);