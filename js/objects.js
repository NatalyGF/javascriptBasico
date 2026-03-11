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
