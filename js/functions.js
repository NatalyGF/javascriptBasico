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