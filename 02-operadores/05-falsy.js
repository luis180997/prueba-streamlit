// short-circuit

/*
Estos valores son truthy: 
    true
    'false' (string)
    {}
    []
    3.14
    new Date()	I

Estos valores son falsy: 
    false
    0 (zero)
    "" (string vacio)
    null
    undefined
    NaN (Not-a-Number)
*/

// [] || {} -> []   // Cuando es OR devuuelve el primer valor que evalua
// [] && {} -> {}   // Cuando es AND devuuelve el ultimo valor que evalua
// Conclusion:
// - Cuando dos sentencias son verdaderas y se utiliza OR se toma el primer valor.
// - Cuando dos sentencias son verdaderas y se utiliza AND se toma el segundo valor.

let nombre = '';
let username = nombre || 'Anonimo';

console.log(username); // En or si esta vacio un valor devuelve el otro valor

let nombre2 = 'leon';
let username2 = nombre2 || 'Anonimo';

console.log(username2); // En or si los dos valores estan devuelve el primer valor

function fn1() {
    console.log('soy funcion 1');
    return false;
}

function fn2() {
    console.log("Soy funcion 2");
    return true;
}

let x = fn1() && fn2();


var a = ll(0); // false
var b = !!("0"); // true
var c = (false == 0); // true 
var d = (false == ""); // true 
var e = (0 == ""); // true

// Los valores faisy null y undefined no son equivaientes a nada, excepto a si mismos: 
var f = (null == false); // false
var g = (null == null); // true
var h = (undefined == undefined); // true
var i = (undefined == null); // true

// El valor falsy NaN no es equivatente a nada - inciuyendo el mismo NaN!
var j = (NaN == null); // false
var k = (NaN == NaN); // false

// Validaciones estrictas
var l = (false == 0); // true 
var m = (false === 0); // false

function isTruthyOrFalsy(value) { 
    if (value) {
        console.log('Truthy!'); 
    } else {
        console.log('Falsy.');
    }
}

isTruthyOrFalsy(true); // Outputs: "Truthy!" 
isTruthyOrFalsy('false');// Outputs: "Truthy!" 
