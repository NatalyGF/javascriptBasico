console.log("Clase de objetos")

let nombre ="Nata";
let apellido ="Gutierrez";
let edad = 18;

//Objetos

const persona ={
    nombre: "Nata",
    apellido: "Gutierrez",
    edad: 18
};

//renderizar el objeto completo

console.log("console.log desde un objeto", persona);

// renderizar una propiedad del objeto

console.log("console.log desde la propiedad nombre del objeto: ", persona.nombre );
console.log("console.log desde la propiedad nombre del objeto: ", persona.nombre, persona.apellido );
console.log("console.log desde la propiedad nombre del objeto: ", persona.apellido );
console.log("console.log desde la propiedad nombre del objeto: ", persona.edad );

////////////////////////////////////////////////////////////////////////////////////////
//acceder a las propiedades de un objeto mediante la notacion corchete

console.log("console.log desde la propiedad nombre del objeto. Notacion corchetes: ", persona["nombre"] );
console.log("console.log desde la propiedad nombre del objeto. Notacion corchetes: ", persona["apellido"] );
console.log("console.log desde la propiedad nombre del objeto. Notacion corchetes: ", persona["edad"] );

const carro={
    marca: "Toyota",
    modelo: "corolla",
    anio: 2020,
    color: "rojo",
    precio: 20000
}

console.log("console.log desde un objeto", carro);
carro.precio =15000;


const persona2 ={
    nombre: "Nataly",
    apellido: "Gutierrez",
    edad: 18,
    sumar:function(a,b){
        return a + b
    },
    saludar(){
        return persona2.nombre + persona2.apellido // return nombre + apellido
    },
    multiplicar: (a,b) => {
        return a*b
    }

};

console.log(persona2.saludar());
console.log(persona2.sumar(1, 2));
console.log(persona2.multiplicar(1, 2));

// Creá un objeto que represente un producto con nombre y precio. 
// Agregale un método que muestre el precio con un 21% de IVA incluido.

const producto ={
    nombre: "cuaderno",
    precio: 5000,
    precioIVA(){
        const IVA= 0.21;
        return (producto.precio*IVA) + producto.precio // this.precio
    }
}

console.log("El precio con iva es ", producto.precioIVA())

let nombre2 = "Ana";
let apellido2 = "gomez";

console.log("procesar string upperCase", nombre2.toUpperCase());
console.log("procesar string lowerCase", nombre2.toLowerCase());


console.log("longitud del string", nombre2.length) //longitud del string

// saber si una palabra o letra esta incluida

console.log(nombre2.toLowerCase().includes("an"))

//concatenar
const concatenar = nombre.concat(" ", apellido);

console.log(concatenar)

//////////////////////////////////////////////////////////////////////////////

/* 
Ejercicio 1
Creá un objeto que represente un usuario con nombre, apellido y email. 
Agregale un método que use template literals para mostrar la presentación completa. 
Agregale otro método que convierta el email a minúsculas antes de mostrarlo.
■ Investigá: ¿Qué es typeof y para qué sirve? 
Usalo para mostrar qué tipo de dato es cada propiedad del objeto.
*/

const usuario1 = {
    nombre: "Nata",
    apellido: "Gutierrez",
    email: "Natagutty@gmail.com",
    literalsTemplate(){
        return `El nombre de usuario es ${usuario1.nombre}, su apellido es ${usuario1.apellido} y su email es ${this.emailMinusculo()}`
    },
    emailMinusculo(){
        return usuario1.email.toLowerCase()
    }

}

console.log(usuario1.literalsTemplate());

console.log(typeof usuario1.nombre);
console.log(typeof usuario1.apellido);
console.log(typeof usuario1.email);
console.log(typeof usuario1.literalsTemplate());
console.log(typeof usuario1.emailMinusculo());


/* 
Ejercicio 2
Creá un objeto que represente un producto con nombre, precio y stock. 
Agregale un método que use un ternario para mostrar si hay stock disponible o no. 
Agregale otro método que muestre el nombre del producto siempre en mayúsculas.
■ Investigá: ¿Qué hace .toFixed(2)? Usalo para mostrar el precio siempre con dos decimale
*/

const producto1 = { 
    nombre: "Libro",
    precio: 15000,
    stock: 10,
    stockDisponible(){
        return producto1.stock >0 ? `Hay ${producto1.stock} ${producto1.nombreMay()} disponibles, con un costo de ${producto1.precio.toFixed(2)} cada uno` : "No hay stock disponible"
    },
    nombreMay(){
        return producto1.nombre.toUpperCase()
    }
}

console.log(`${producto1.stockDisponible()}`)

/* 
Ejercicio 3
Creá un objeto que represente un alumno con nombre, apellido y nota. Agregale un método que
use if/else para mostrar si aprobó o desaprobó. La nota mínima para aprobar es 6. El mensaje
debe incluir el nombre completo armado con template literals.
■ Investigá: ¿Qué es el operador &&? Usalo para validar que la nota sea un número mayor o igual a 0 antes
de evaluar si aprobó
*/

const alumno = {
    nombre: "Nata",
    apellido: "Gutierrez",
    nota: 8,
    aprobar(){
        if(this.nota >= 6 && this.nota <= 10){
            return `El estudiante ${this.nombre} ${this.apellido} aprobo con una nota de ${this.nota}`;
        } else{
            return `El estudiante ${this.nombre} ${this.apellido} no aprobo`;
        }
    }


}

console.log(alumno.aprobar());
