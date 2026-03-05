console.log("Variables in JavaScript");
//¿Que es una variable?
//Un espacio reservado donde guardamos un valor
// como string, number, booleano, array, objetos

// tipos de variable: let, const, var
let age = 35;
console.log("age", age)

const firstName ="Nataly";
console.log("Mi nombre es: ", firstName)


//Buenas practicas
//  usar constantes en lo posible
// nombrar las variables en camelCase
// colocar nombres descriptivos

//Ejercicio: Declarar una variable que describa a una persona e imprimir en consola

const yourName = "Nataly";
const lastName = "Gutierrez";
let currentAge = 35;
let estatura = 160;
const isFemenine = true;

console.log("La descripción de esta persona es: Su nombre y apellido es: ", yourName + " " + lastName +" tiene "+ currentAge + " años, su estatura es "+ estatura + " centimetros" + " y es mujer? "+ isFemenine)

//Mi segundo commit

console.log("¡Vamos " + yourName + " si se puede!")


// > mayor que
// < menor que
// = igual que

// 1 = true;
// 0 = false;
//true && true = true;
//false && true = false;
//true || false = true;
//false || true = true; 

//Condicionales

let licencia = true;
let edad = 17
// if else elseIf
//switch

if(licencia && edad >= 18){
    console.log("puedes manejar")
}else{
    console.log("No puedo manejar")
}

if(licencia || edad >= 18){
    console.log("puedes manejar")
}else{
    console.log("No puedo manejar")
}

// comparaciones
// ==
// === tambien evalua el tipo de la variable

let unos ="10";
let dos = 10;

if (unos===dos){
    console.log("Si son iguales")
}else{
    console.log("No son iguales")
}

//Crear 3 variables
// ¿tienesDNI?
// EDAD
//Nacionalidad

//si tengo dni y soy mayor de edad y tengo nacionalidad, imprimir en consola puedo votar
// si tengo nacionalidad y soy mayor de edad y no tengo DNI, imprimir debes ir a la registraduria
// en caso contrario imprimir en consola no puedes votar

// EN CONDICIONALES CUANDO EVALUAS BOOLEANOS POR DEFECTO SIEMPRE TE TOMA TODO COMO TRUE
// ! > NEGACIÓN

let DNI = false;
let nacionalidad = true;
let newAge = 18;

if(DNI && newAge>=18 && nacionalidad){
    console.log("Puedo votar")
}else if (nacionalidad && newAge>=18 && !DNI){
    console.log("Ir a la registraduria")
}else{
    console.log("No puedes votar")
}

