console.log("Clase de funciones")

/*
Que es un función?
 es tener una caja donde tengo una receta y se ejecutara cada que la llamo
 Una accion repetitiva que debo hacer constantemente

*/

function saludar(){
    console.log("¡Hola a todos!")
}

saludar();

/////////////////////////////////////////////////////////////7

function saludar1(nombre){
    console.log("¡Hola "+ nombre +"!")
}

saludar1("Nataly");

///////////////////////////////////////////////////////////////

function qa(isQa){
    if(isQa){
        console.log("Soy QA")
    }else{
        console.log("No soy QA")
    }
}

qa(true);

////////////////////////////////////////////////////////////

//Un return es un corta circuito, me saca de la función, lo que haya abajo
// del return dentro de la función no se ejecuta

function sumar(x, y){
    return x + y;
}

console.log(sumar(10,20));

const resultado =sumar(10,10);
console.log(resultado);

////////////////////////////////////////

function verifyIsMajor(age){
    if(age>=18){
        return true // true porque eres mayor de edad
    }else{
        return false // false porque soy menor de edad
    }
}

const result = verifyIsMajor(19)
console.log(result)

///////////////////////////////////////

// Mala practica porque llama dos veces a la funcion y gasta memoria

function puedoEntrar(edad,invitacion){

    if(verifyIsMajor(edad)&& invitacion){
        return "puedes entrar al evento"
    }if(verifyIsMajor(edad) && !invitacion){
        return "necesita invitacion para entrar"
    }

    return  "no puedes entrar al evento"
}
console.log(puedoEntrar(18,true))

///////////////////////////////////////
// BUENA PRACTICA!!

function puedoEntrar2(edad,invitacion){

    const ageResult = verifyIsMajor(edad)

    if(ageResult && invitacion){
        return "puedes entrar al evento"
    }if(ageResult && !invitacion){
        return "necesita invitacion para entrar"
    }

    return  "no puedes entrar al evento"
}
console.log(puedoEntrar2(18,false))

// Ejemplo codigo repetitivo
// Una tienda necesita calcular el precio final de 5 productos con 10% de descuento

let producto1 = 100;
let producto1final = producto1 *0.9

let producto2 = 100;
let producto2final = producto2 *0.9

let producto3 = 100;
let producto3final = producto3 *0.9

let producto4 = 100;
let producto4final = producto4 *0.9

let producto5 = 100;
let producto5final = producto5 *0.9

/////////////////////////

//Usando function

function finalPrice(costoProducto){
    costoProducto * 0.9
}

//Ejercicio 26
/*
Niños menores de 12 pagan $3. Adultos mayores de 65 pagan $4. Todos los demás pagan $8. Además, si
es martes, todos pagan la mitad del precio. Imprimir el precio final
*/
function precioEntrada(edad){
    if(edad>0 && edad<12){
        return 3;
    } 
    else if(edad>65){
        return 4;
    }
    else if(edad>=12 && edad<= 65){
        return 8;
    }
}

function promocion(edad, dia){
    const precio = precioEntrada(edad)
    if(dia.toLowerCase()==="martes"){
        return precioFinal = precio*0.5;
    }
    return precioFinal = precio;
}

console.log(promocion(35,"miercoles"))

/*
Ejercicio 11 — Acceso al sistema
Crea una función llamada `verificarAcceso` que reciba usuario y contrasena. Si el usuario es "admin" Y la
contrasena es "1234", retornar "Acceso concedido". Si el usuario es correcto pero la contrasena no, retornar
"Contrasena incorrecta". Si ninguno es correcto, retornar "Usuario no encontrado"
*/

function verificarAcceso(user, password){
    const userAnswer = "admin";
    const passwordAnswer = 1234;
    if(user === userAnswer && passwordAnswer === password){
        return "Acceso concedido";
    }else if (user === userAnswer && password !== passwordAnswer){
        return "Contraseña incorrecta";
    }
    return "Usuario no encontrado";
}

console.log(verificarAcceso("user", 1234));

/*
Ejercicio 12 — Clasificar número
Crea una función llamada `clasificarNumero` que reciba un número y retorne: "Positivo" si es mayor a 0,
"Negativo" si es menor a 0, o "Cero" si es exactamente 0
*/

function clasificarNumero(num){
    const numAnswer = num;
    if(numAnswer === 0){
        return "Cero";
    }else if (numAnswer > 0){
        return "Positivo";
    }
    return "Negativo"
}

console.log(clasificarNumero(0));

/*
Ejercicio 13 — — Calcular envío
Crea una función llamada `calcularEnvio` que reciba el total de una compra y si el cliente tiene membresía
premium. Si el total es mayor a $50 O tiene membresía, el envío es gratis. Si no, el envío cuesta $5.
Retornar el costo del envío.

*/

function calcularEnvio(total, membresia){
    if(total>50 || membresia){
        return "Envio gratis";
    }
    return "Tu envio cuesta $5"

}

console.log(calcularEnvio(50,false));

/*
Ejercicio 14 — Categoría de usuario
Crea una función llamada `categorizarUsuario` que reciba los puntos de un usuario. Si tiene más de 1000
puntos es "VIP", entre 500 y 1000 es "Premium", entre 100 y 499 es "Regular", menos de 100 es "Nuevo".
Retornar la categoría

*/

function categorizarUsuario(puntos){
    const puntosAnswer = puntos;
    if(puntosAnswer > 1000){
        return "VIP";
    }else if (puntosAnswer >= 500 && puntosAnswer <= 1000){
        return "Premium";
    }else if (puntosAnswer >= 100 && puntosAnswer < 500){
        return "Regular";
    }else if (puntosAnswer >=0 && puntosAnswer < 100){
        return "Nuevo"
    }
    return "Numero no valido"
}

console.log(categorizarUsuario(-99))

/*
Ejercicio 15 — Validar contraseña
Crea una función llamada `validarContrasena` que reciba una contrasena. Si tiene 8 o más caracteres Y NO
es "12345678", retornar "Contrasena válida". Si no, retornar "Contrasena débil". Pista: usa
`contrasena.length` para saber cuántos caracteres tiene.
*/

function validarContrasena(password){
    if(password.length >= 8 && password != 12345678){
        return "Contraseña valida";
    }
    return "Contraseña debil";
}

console.log(validarContrasena("holi"))

/*
Ejercicio 16 — Calcular impuesto
Crea una función llamada `calcularImpuesto` que reciba un salario mensual. Si el salario es menor a $1000,
no paga impuesto. Si está entre $1000 y $3000, paga el 10%. Si es mayor a $3000, paga el 20%. Retornar
el monto del impuesto.
*/

function calcularImpuesto(salario){
    if(salario < 1000){
        return "Su impuesto es: $" + salario*0;
    }else if (salario >= 1000 && salario <= 3000){
        return "Su impuesto es: $" + salario*0.1;
    }
    return "Su impuesto es: $" + salario*0.2;
}

console.log(calcularImpuesto(100))

/*
Ejercicio 17 — Ticket de compra
Crea una función llamada `generarTicket` que reciba el nombre del producto, la cantidad y el precio unitario.
La función debe retornar una frase con el resumen de la compra, por ejemplo: "Producto: Café | Cantidad: 3
| Total: $9".
*/

function generarTicket(productName, cantidad, precio){
    return "Producto: " + productName + " | Cantidad: " + cantidad + " | Total: $" + precio*cantidad
}

console.log(generarTicket("Papel",10, 1000 ))

/*
Ejercicio 18 — Puede conducir
Crea una función llamada `puedeConducir` que reciba edad, si tiene licencia y si ha consumido alcohol.
Para poder conducir debe tener 18 o más años, tener licencia Y NO haber consumido alcohol. Retornar
"Puede conducir" o el motivo por el que no pued
*/

function puedeConducir(edad, licencia, drankAlcohol){
    if(edad >= 18 && licencia && !drankAlcohol){
        return "Puede conducir";
    }if(edad < 18){
        return "Tiene menos de 18 años, no puede conducir";
    }if(!licencia){
        return "No tiene licencia, no puede conducir";
    }if (drankAlcohol){
        return "Bebio alcohol, no puede conducir";
    }
}

console.log(puedeConducir(5,false,true)) // Duda, hay forma de que muestre todo lo que no cumple sin tener que hacer if con todas las combinaciones??

/*
Ejercicio 19 — Conversor de divisas
Crea una función llamada `convertirDivisa` que reciba una cantidad en dólares y el tipo de moneda de
destino: "EUR", "MXN" o "COP". Usar tasas aproximadas: 1 USD = 0.92 EUR, 1 USD = 17 MXN, 1 USD =
4000 COP. Retornar el valor convertido.
*/

function convertirDivisas(dolares, toCurrency){
    const COP = 4000;
    const EUR = 0.92;
    const MXN = 17;

    if(toCurrency === "COP"){
        return "$" + dolares + " son: " + dolares*COP + " COP";
    }if (toCurrency === "EUR"){
        return "$" + dolares + " son: " + dolares*EUR + " EUR";
    }if (toCurrency === "MXN"){
        return "$" + dolares + " son: " + dolares*MXN + " MXN";
    }return "Error"
}

console.log(convertirDivisas(10, "MXN"));

/*
Ejercicio 20 — Calculadora completa
Crea una función llamada `calcular` que reciba dos números y una operacion como texto: "sumar", "restar",
"multiplicar" o "dividir". Retornar el resultado de la operación correspondiente. Si la operación es "dividir" y
el segundo número es 0, retornar "Error: no se puede dividir entre cero". Si la operación no existe, retornar
"Operación no válida"
*/

function calcular(num1, num2, operacion){
    if(operacion === "sumar"){
    respuesta =num1 + num2;
    return "La suma es: "+ respuesta;
    }else if (operacion === "restar"){
    respuesta = num1 - num2;
    return "La resta es: "+ respuesta;
    }else if (operacion === "multiplicar"){
    respuesta = num1 * num2;
    return "La multiplicacion es: "+ respuesta;
    }else if (operacion==="dividir"){
        if(num2!=0){
            respuesta = num1 / num2;
            return "La division es: "+ respuesta;
        }else{
            return "Error, no se puede dividir por cero"
        }
    }return "Operación no válida"
}

console.log(calcular(5,0, "multiplicar"))