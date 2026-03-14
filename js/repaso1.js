// Repaso uno

function nombreFunction(){
    console.log("funcion de ejemplo")
}

nombreFunction();

const functionArrow =(nombre) =>{
    console.log(`Hola ${nombre.toUpperCase}, como estas?`)
}

functionArrow("Nata");

/*const eliminarEspacios = () => {
    const com = " como estan ? "
    console.log("hola", " como estan ?").trim // averiag
}

eliminarEspacios()*/

// Ternarios

true ? console.log("estudiaron") : console.log("no estudiaron")


const persona3 ={
    nombre: "luisa",
    edad: 19,
    tieneDinero: true,
    dinero: 20000,
    //quiero que retorne el impuesto de 17%
    calcularDinero(){
        return this.tieneDinero ? this.dinero - (this.dinero * 0.17) : 0
    }
}

// si la persona es mayor de edad y tiene dinero quiero que imprima puede estudiar

/*
Crear 3 objetos, uno por cada producto cada uno tiene:
nombre - string
precio number
stock number
categoria string:  ropa, tecnologia)

cada producto debe tener un metodo mostrar(), este metodo debe usar ternario para mostrar si esta disponible o sin stock
y muestre el nombre siempre en mayuscula

*/

const Libro ={
    nombre: "Libro",
    precio: 15000,
    stock: 10,
    categoria: "Estudio",
    mostrar(){
        return `El producto ${Libro.nombre.toUpperCase()}  ${Libro.stock > 0 ? "esta disponible" : "no esta disponible"} `
    }

}

console.log(Libro.mostrar())


/**
 * Crea un objeto llamado carrito con productoUno (empieza en null y se llena cuando se agregue);
 * productoDos (empieza en null);
 * productoTres (empieza en null);
 * total (empieza en 0);
 *
 * tener un metodo agregarProducto(producto) que reciba un producto
 * dentro del metodo agregarProducto(producto)
 * se debe verificar si tiene stock, si lo tiene se agrega a productoUno
 * sino tiene stock, imprima mensaje que indique que no se puede agregar el producto
 *
 */

const carrito ={
    producto1: null,
    producto2: null,
    producto3: null,
    total: 0,
    agregarProducto (producto){
        const responde = producto.stock > 0 ? this.producto1 = producto : "no se puede agregar el producto";
        console.log(`producto = ${responde}`)
    },
    calcularTotal(){
        return this.producto1.precio + this.producto2.precio + this.producto3.precio
    }
}

carrito.agregarProducto(Libro)

console.log("carrito", carrito.producto1)

//////////////////////////////////////////////////////////////////////////////////////////

// ============================================
// 🐛 EJERCICIO: Bug Report
// ============================================
// Vas a modelar un bug report como objeto de JavaScript.
// Usa todo lo que ya sabes: objetos, funciones, arrow functions.


// ── PARTE 1 ──────────────────────────────────
// Crea un objeto llamado bugReport con estas propiedades:
//   id, titulo, severidad ("alta" / "media" / "baja"), estado, reportadoPor

// ── PARTE 2 ──────────────────────────────────
// Agrega estas funciones DENTRO del objeto:

// describir()
//   Muestra en consola el id, severidad, estado y título del bug.

// cambiarEstado(nuevoEstado)
//   Recibe un nuevo estado y lo actualiza en el objeto.
//   Luego muestra: "Estado actualizado a: ..."

// esUrgente()
//   Retorna true si la severidad es "alta", false si no.
//   💡 ¿Qué operador ya conoces que te puede servir aquí?

// ── PARTE 3 ──────────────────────────────────
// Prueba tu objeto:

// 1. Llama a describir()
// 2. Cambia el estado a "en progreso" y llama a describir() de nuevo
// 3. Muestra en consola si el bug es urgente o no

const bugReport = {
    id: 1848,
    titulo: "Muchos errores en consola",
    severidad: "alta",
    estado: "open",
    reportadoPor: "Nata",
    describir(){
        return console.log(`${this.id} - ${this.severidad} - ${this.estado} - ${this.titulo}`)
    },
    cambiarEstado(nuevoEstado){
        this.estado = nuevoEstado
        return console.log(`Estado actualizado a: ${this.estado}`)
    },
    esUrgente(){
       return this.severidad === "alta" ? true : false
    }
}

bugReport.describir()
bugReport.cambiarEstado("en progreso")
console.log("¿La severidad es urgente?", bugReport.esUrgente());







