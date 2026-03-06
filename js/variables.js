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

// Ejercicio 21 — Login de usuario
/*Si el usuario es "jerel" Y la contraseña es "1234", imprimir "Sesión iniciada". Si el usuario es correcto pero la
contraseña no, imprimir "Contraseña incorrecta". Si el usuario tampoco es correcto, imprimir "Usuario no
encontrado".*/

let user = "jerely";
let password = "12346";

if(user==="jerel"&& password==="1234"){
    console.log("sesion iniciada")
} else if (user==="jerel" && password!="1234"){
    console.log("contraseña incorrecta")
}else{
    console.log("usuario no encontrado")
}

//Ejercicio 22
/*
Si el total de compra es mayor a $50 O si el cliente tiene membresía premium, el envío es gratis. Si no
cumple ninguna de las dos condiciones, imprimir que el envío cuesta $5
*/

let premiumMembership = false;
let compra = 60;

if(compra>50 || premiumMembership){
    console.log("Tu envio es gratis")
}else{
    console.log("Tu envio cuesta $5")
}

//Ejercicio 23
/*
Para adoptar una mascota, la persona debe tener más de 18 años, NO vivir en apartamento Y tener
ingresos mayores a $1000. Si cumple todo, imprimir que puede adoptar. Si no, que no cumple los requisitos
*/

let apartment = false;
let age2= 19;
let ingresos = 1000;

if(!apartment && age2>18 && ingresos>1000){
    console.log("Puedes adorptar")
}else{
    console.log("No tienes las condiciones para adoptar")
}

//Ejercicio 24
/*
Según la operación indicada ("sumar", "restar", "multiplicar", "dividir"), calcular el resultado entre dos
números e imprimirlo. Si se intenta dividir entre cero, imprimir un mensaje de error
*/

let operacion = "division";
const num1 = 0;
const num2 = 10;
let resultado = 0;

if(operacion==="sumar"){
    resultado =num1 + num2
    console.log("La suma es: "+ resultado)
}else if (operacion === "restar"){
    resultado = num1 - num2
    console.log("La resta es: "+ resultado)
}else if (operacion=== "multiplicacion"){
    resultado = num1 *num2
    console.log("La multiplicacion es: "+ resultado)
}else if (operacion==="division"&& num2!=0){
    resultado = num1 / num2
    console.log("La division es: "+ resultado)
}else{
    console.log("Error, no se puede dividir por cero")
}

//Ejercicio 25
/*
Dado un mes en número del 1 al 12, imprimir la estación del año correspondiente: Invierno (12, 1, 2),
Primavera (3–5), Verano (6–8), Otoño (9–11). Si el número no está entre 1 y 12, imprimir que no es un mes
válido
*/

let estacion = 0;

if(estacion===12 || estacion === 1 || estacion ===2){
    console.log("Es invierno")
}else if(estacion>=3 && estacion <= 5){
    console.log("Es Primavera")
}else if ( estacion >=6 && estacion <= 8){
    console.log( "Es verano")
}else if (estacion >=9 && estacion <= 11){
    console.log( "Es otoño")
}else{
    console.log("No es un mes valido")
}

//Ejercicio 26
/*
Niños menores de 12 pagan $3. Adultos mayores de 65 pagan $4. Todos los demás pagan $8. Además, si
es martes, todos pagan la mitad del precio. Imprimir el precio final
*/

let age3= 67;
let dia = "martes";
let resultado2=0;

if(age3>0 && age3<12){
    resultado2 = 3
}else if(age3>65){
    resultado2 = 4
}else if(age3>=12 && age3<= 65){
    resultado2= 8
}else{
    console.log("No es edad valida")
}

if(dia==="martes"){
    resultado = resultado2*0.5
    console.log("El precio final es " + resultado2)
}else{
    console.log("El precio final es " + resultado2)
}

