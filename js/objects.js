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
        if(typeof this.nota === "number" && this.nota >= 6){
            return `El estudiante ${this.nombre} ${this.apellido} aprobo con una nota de ${this.nota}`;
        } else{
            return `El estudiante ${this.nombre} ${this.apellido} no aprobo`;
        }
    }


}

console.log(alumno.aprobar());

/* 
Ejercicio 4
Creá un objeto que represente una cuenta bancaria con titular y saldo. 
Agregale un método que reciba un monto y lo deposite. Agregale otro método que use if/else
para retirar dinero solo si hay saldo suficiente. 
Todos los mensajes deben usar template literals.
■ Investigá: ¿Qué hace Math.abs()? 
Usalo para mostrar la diferencia entre el monto solicitado y el saldo
disponible cuando no haya fondos.
*/

const cuentaBancaria = {
    titular: "Nata Gutierrez",
    saldo: 50000000,
    agregarSaldo(deposito){
        this.saldo = this.saldo + deposito
        return `Deposito exitoso, su nuevo saldo es: ${this.saldo}`
    },
    retirarSaldo (retiro){
        if(this.saldo >= retiro){
            this.saldo = this.saldo - retiro
            return `Retiro exitoso, su nuevo saldo es: ${this.saldo}`
        }else{
            const diferencia = Math.abs(this.saldo - retiro)
            return`Usted no tiene saldo suficiente para hacer el retiro, tiene una diferencia de: ${diferencia}`

        }
    }
}

console.log(cuentaBancaria.agregarSaldo(1000000));
console.log(cuentaBancaria.retirarSaldo(60000000));

/* 
Ejercicio 5
Creá un objeto que represente un empleado con nombre, puesto y salario. 
Agregale un método que use .toUpperCase() para mostrar el puesto en mayúsculas.
Agregale otro método que use if/else para mostrar si el salario es alto (más de $200.000),
 medio (entre $100.000 y $200.000) o bajo (menos de $100.000).
■ Investigá: ¿Qué es el operador ||? 
Usalo para mostrar un puesto por defecto si la propiedad puesto está vacía
*/

const empleado3 ={
    nombre: "Nata",
    puesto: "Project Management",
    salario: 500000,
    puestoUpperCase(){
        if (typeof this.puesto ==! "string" || this.puesto == ""){
            return "Su puesto es Secretaria"
        } 
        return `Tu puesto es: ${this.puesto.toUpperCase()}`;
    },
    rangoSalarial (){
        if(this.salario > 200000){
            return "Su salario es alto"
        }else if (this.salario>= 1000000 && this.salario <= 200000) {
            return "Su salario es medio"
        }
        return "Su salario es bajo"
    }
}

console.log(empleado3.puestoUpperCase());
console.log(empleado3.rangoSalarial());

/* 
Ejercicio 6
Creá un objeto que represente un formulario de registro con nombre de usuario y contraseña.
Agregale un método que use .trim() y .length con if/else para validar que el nombre 
de usuario tenga entre 4 y 12 caracteres.
Agregale otro que valide que la contraseña tenga al menos 8 caracteres.
■ Investigá: ¿Qué hace .padStart()? Usalo para mostrar el largo de la contraseña relleno 
con ceros a la izquierda, por ejemplo '08' en lugar de '8'.
*/

const formularioRegistro ={
    usuario: "Natfalda",
    password: "Galleta",
    longitudUsuario(){
        const usuariolongitud = this.usuario.trim()
        if(usuariolongitud.length >= 4 && usuariolongitud.length <= 12){
            return `Su usuario es valido y tiene ${usuariolongitud.length} caracteres`
        }
        return "Su usuario no tiene la longitud correcta"
    },
    longitudPassword(){
        const passwordlongitud = this.password.trim()
        if(passwordlongitud.length >= 8 ){
            return `Su contraseña es valida y tiene ${passwordlongitud.length} caracteres`
        }else{
        const nuevoPass = this.password.padStart(8, 0)
        return `Su contraseña no tiene la longitud correcta, ahora es ${nuevoPass}`
        }

    }
}

console.log(formularioRegistro.longitudUsuario());
console.log(formularioRegistro.longitudPassword());

/* 
Ejercicio 7
Creá un objeto que represente una canción con título, artista y duración en segundos. 
Agregale un método que use variables internas para convertir la duración a minutos 
y segundos y la muestre con template literals. 
Agregale otro método que use un ternario para mostrar si la canción dura más
o menos de 3 minutos (180 segundos).
■ Investigá: ¿Qué hace Math.floor()? Necesitás usarlo para obtener los minutos enteros 
al convertir segundos.
*/

const cancion = {
    titulo: "Magic",
    artista: "ColdPlay",
    duracion: 285,
    duracionMinutos (){
        const minutos = Math.floor(this.duracion/60);
        const segundos = this.duracion - (minutos*60);

        return `La cancion dura ${minutos} minutos con ${segundos} segundos`

    },
    duraMucho(){
        const tresMinutos = 180;
        return this.duracion > tresMinutos ? "La canción dura mas de 3 minutos" : "La cancion dura menos de 3 minutos"
    }
}

console.log(cancion.duracionMinutos());
console.log(cancion.duraMucho());

/* 
Ejercicio 8
Creá un objeto que represente un auto con marca, modelo y kilometraje. 
Agregale un método que use if/else para mostrar si el auto necesita service urgente 
(más de 10.000 km), service próximo (entre 7.500 y 10.000 km) o está al día 
(menos de 7.500 km). 
Agregale otro método que muestre la descripción completa del auto usando template literals
con el modelo siempre en mayúsculas.
■ Investigá: ¿Qué es el operador % (módulo)? Usalo para mostrar cuántos km le faltan al auto para llegar al
próximo múltiplo de 2.500 km.
*/

const auto = {
    marca: "Nissan",
    modelo: "March",
    kilometraje: 1000,
    servicio(){
        if (this.kilometraje > 10000){
            return "Necesita servicio Urgente"
        }else if (this.kilometraje >= 7500 && this.kilometraje <= 10000){
            return "Necesitará servicio proximamente"
        }
        return "Servicio al dia"
    },
    descripcionAuto (){
        const kilometros = 2500;
        const resto = this.kilometraje % kilometros;
        if(resto === 0){
            return `Su auto es de la marca ${this.marca}, modelo ${this.modelo.toUpperCase()} 
        y tiene un kilometraje de ${this.kilometraje} y le faltan 0 kilometros para llegar
        al proximo multiplo de 2500`
        }
        return `Su auto es de la marca ${this.marca}, modelo ${this.modelo.toUpperCase()} 
        y tiene un kilometraje de ${this.kilometraje} y le faltan ${kilometros-resto} kilometros
        para el proximo multiplo de 2500`
    }
}

console.log(auto.servicio());
console.log(auto.descripcionAuto());

/* 
Ejercicio 9
Creá un objeto que represente un mensaje de chat con remitente, texto y leído (booleano).
Agregale un método que use un ternario para mostrar el estado del mensaje como 'leído' 
o 'no leído'. 
Agregale otro método que use .length con if/else para avisar si el mensaje es demasiado
largo (más de 140 caracteres).
■ Investigá: ¿Qué hace el operador ! (negación)? Usalo para cambiar el estado de leído a no leído y
viceversa dentro de un método.
*/

const chat = {
    remitente: "Flyr",
    texto: "Le avisamos que jugamos con sus sentimientos y no tendrán bono",
    leido: !true,
    mensajeLeido (){
        return this.leido ? "Mensaje leido" : "mensaje no leido"
    },
    longitudMensaje (){
        const longitudTexto = this.texto.length
        if(longitudTexto > 140){
            return "El mensaje es demasiado largo"
        }
        return `El mensaje es corto y tiene ${longitudTexto} caracteres`
    }
}
console.log(chat.mensajeLeido());
console.log(chat.longitudMensaje());

/* 
Ejercicio 10
Creá un objeto que represente un empleado con nombre y lista de habilidades 
guardadas como un string separado por comas. 
Agregale un método que use .split() para mostrar cuántas habilidades tiene. 
Agregale otro método que use .includes() con if/else para verificar si tiene una habilidad
específica que reciba como parámetro.
■ Investigá: ¿Qué diferencia hay entre .includes() en un string y en el resultado de 
.split()? 
Probá buscar una habilidad con espacios antes o después y fijate qué pasa si no usás 
.trim() primero.

El include lo que hace es buscar una palabra que yo le diga, mientras el split
separa un string
El trim elimina los espacios en blancoo
*/

const empleado = {
    nombre: "Nataly",
    habilidades: "fantastica, increible, juiciosa, deberia ganar mas",
    cualidades (){
        const arrayHabilidades = this.habilidades.split(',') 
        
        return `tiene ${arrayHabilidades.length} habilidades`
    },
    tieneHabilidad(habilidad){
        const habiilidadProcesada =habilidad.trim()
       return empleado.habilidades.includes(habiilidadProcesada) ? "Si tiene la habilidad" : "No tiene esa habilidad"
    }

}

console.log(empleado.cualidades());
console.log(empleado.tieneHabilidad(" fantastica "))

/* 
Ejercicio 11
Creá un objeto que represente una tienda con nombre, dirección y si está abierta. 
Agregale un método que use .toUpperCase() para mostrar el nombre de la tienda. 
Agregale otro método que use un ternario para mostrar si la tienda está abierta o cerrada.
■ Investigá: ¿Qué es la concatenación de métodos (method chaining)? Intentá escribir 
.trim().toUpperCase() en una sola línea sobre el nombre de la tienda
*/

const tienda ={
    nombre: " La tiendita confiable ",
    direccion: "calle 37 a # 35 a 34",
    abierta: true,
    nombreMayus () {
        return `El nombre de la tienda es ${this.nombre.trim().toUpperCase()};`
    },
    estadoTienda () {
        return this.abierta ? "La tienda esta abierta" : "La tienda esta cerrada";
    }
}

console.log(tienda.nombreMayus());
console.log(tienda.estadoTienda());

/*
Ejercicio 12
Creá un objeto que represente un pasajero con nombre, número de asiento y peso del equipaje en kilos. 
 * Agregale un método que use template literals para mostrar los datos del pasajero. 
 * Agregale otro método que use if/else para calcular el cargo extra: el equipaje es gratuito hasta 23 kg, 
 * y por cada kilo extra se cobran $15. ■ Investigá: ¿Qué hace Math.max()? Usalo para calcular los kilos de exceso sin 
 * necesitar un if/else para ese cálculo puntual. realiza ese ejercicio
 */


const pasajero={
    nombre: "Luis",
    asiento: 25,
    pesoEquipaje: 35,
    showDataPax (){
        return `${this.nombre} tiene el asiento ${this.asiento} y lleva ${this.pesoEquipaje} kg de equipaje`
    },
    calculateExtraPriceBaggage(){
        const maxBaggage = 23;
        const costBaggage = 15;
        const exedeEquipaje = Math.max(0, this.pesoEquipaje - maxBaggage);
        return exedeEquipaje > 0 ? `El valor del cargo adicional es: ${exedeEquipaje * costBaggage} dolares`:
                                    'no tienes cargo adicional'
    }
}

console.log(pasajero.calculateExtraPriceBaggage());

/* 
Ejercicio 13
Creá un objeto que represente un libro con título, autor y cantidad de páginas. 
Agregale un método que use .slice() para mostrar solo los primeros 10 caracteres del título
seguidos de '...' si el título es más largo. 
Agregale otro método con if/else para clasificarlo como lectura corta (menos de 150
páginas), media (entre 150 y 400 páginas) o larga (más de 400 páginas).
■ Investigá: ¿Qué hace .charAt(0)? 
Usalo para mostrar la inicial del autor junto al apellido, por ejemplo 'J.Rowling'.
*/

const libro = {
    titulo: "Harry Potter y la piedra filosofal",
    autor: "J.K Rowling",
    paginas: 223,
    tituloCorto (){
        const longitudTitulo = this.titulo.length;
        if (longitudTitulo > 10){
            return `El titulo es ${this.titulo.slice(0,10) + "..."}`
        }
        return `El titulo es: ${this.titulo}`
    },
    clasificacionLectura (){
        if (this.paginas < 150){
            return "Es una lectura corta";
        }else if( this.paginas >= 150 && this.paginas <= 400){
            return "Es una lectura media";
        }
        return "Es una lectura larga"
    },
    metodoChart(){
        const inicial = this.autor.charAt(0);
        const autorArray = this.autor.split(" ");
        return `El autor es ${inicial}.${autorArray[1]}`
    }
}

console.log(libro.tituloCorto());
console.log(libro.clasificacionLectura());
console.log(libro.metodoChart());

/* 
Ejercicio 14
Creá un objeto que represente un jugador con nombre, nivel y puntos. 
Agregale un método que reciba puntos ganados y los sume. 
Usá variables internas y if/else para verificar si los puntos
alcanzan para subir de nivel: se necesitan 1.000 puntos por nivel. 
Si se sube de nivel, los puntos vuelven a 0. 
Mostrá todos los mensajes con template literals.
■ Investigá: ¿Cómo funciona el operador % (módulo) para calcular el resto? 
Usalo para que los puntos que sobran después de subir de nivel no se pierdan 
sino que queden acumulados.
*/

const jugador = {
    nombre: "Nata",
    nivel: 3,
    puntos: 500,
    nuevosPuntos (newPoints){
        this.puntos = this.puntos + newPoints
        const puntosPorNivel = 1000;
        if (this.puntos >=1000){
            upgradeNivel = Math.floor(this.puntos/puntosPorNivel);
            this.nivel = this.nivel + upgradeNivel;
            this.puntos = this.puntos % 1000;
            return `Felicidades has subido a nivel ${this.nivel} y le quedan ${this.puntos} puntos`
        }
        return `Sus nuevos puntos son ${this.puntos}, no alcanza para subir de nivel`
    }
}

console.log(jugador.nuevosPuntos(5));

/* 
Ejercicio 15
Creá un objeto que represente un restaurante con nombre, tipo de cocina 
y calificación del 1 al 5.
Agregale un método que use .replace() para cambiar espacios por guiones en el nombre 
y pasarlo a minúsculas, mostrándolo como si fuera una URL. 
Agregale otro método con if/else para mostrar la calificación en texto:
 1 es 'muy malo', 2 es 'malo', 3 es 'regular', 4 es 'bueno' y 5 es 'excelente'.
■ Investigá: ¿Cuál es la diferencia entre .replace() y .replaceAll()? 
Probá qué pasa si el nombre del restaurante tiene más de un espacio.
*/

const restaurante = {
    nombre: "La mejor playita",
    tipoCocina: "Tradicional Colombiana",
    calificacion: 3,
    modoUrl (){
        return `https://www.${this.nombre.replaceAll(" ", "-").toLowerCase()}.com`
    },
    calificacionRestaurante(){
        if(this.calificacion === 1){
            return "La calificación del restaurante es muy malo"
        }else if(this.calificacion === 2){
            return "La calificación del restaurante es malo"
        }else if(this.calificacion === 3){
            return "La calificación del restaurante es regular"
        }else if(this.calificacion === 4){
            return "La calificación del restaurante es bueno"
        }
        return "La calificación del restaurante es excelente"
    }
}
console.log(restaurante.modoUrl())
console.log(restaurante.calificacionRestaurante());

/* 
Ejercicio 16
Creá un objeto que represente un paciente con nombre, temperatura y presión arterial. 
Agregale un método que use if/else con variables internas para diagnosticar: 
la temperatura normal es entre 36 y 37.5 grados, y la presión normal es entre 60 y 120. 
Si algún valor está fuera del rango, mostrá cuál es el problema. 
Mostrá el diagnóstico completo usando template literals.
■ Investigá: ¿Qué hace el operador && dentro de un if? Usalo para verificar ambas 
condiciones (temperatura Y presión) en una sola línea
*/

const paciente = {
    nombre: "Paquita",
    temperatura: 38,
    presion: 110,
    diagnostico () {
        if ((this.temperatura >= 36 && this.temperatura <= 37.5) && (this.presion >= 60 && this.presion <= 120)){
            return "Usted tiene condiciones normales"
        } else {
            if (this.temperatura < 36 || this.temperatura > 37.5){
                return "Su temperatura no esta en rangos normales";
            }if (this.presion < 60 && this.presion > 120){
                return "Su presion no esta en rangos normales"
            }
        }
    }
}

console.log(paciente.diagnostico())

/* 
Ejercicio 17
Creá un objeto que represente un cupón de descuento con código, 
porcentaje y si está activo.
Agregale un método que reciba un precio y use if/else para aplicar el descuento solo 
si el cupón está activo y mostrar el precio final. Si no está activo, 
mostrar 'Cupón inválido'. Agregale otro método que muestre el código siempre en 
mayúsculas con .toUpperCase().
■ Investigá: ¿Qué hace .toFixed(2)? 
Usalo para que el precio final siempre muestre dos decimales aunque el resultado sea exacto.
*/

const cuponDescuento = {
    codigo: "Promo50",
    porcentaje: 0.5,
    activo: true,
    precioFinal (precio) {
        if (this.activo){
            const precioFinal = (precio * (1 - this.porcentaje));
            return `El precio final con descuento es: ${precioFinal.toFixed(2)}`;
        }
        return "Cupón inválido"
    },
    codigoMayus (){
        return `Tu codigo es: ${this.codigo.toUpperCase()}`
    }
}

console.log(cuponDescuento.precioFinal(1000));
console.log(cuponDescuento.codigoMayus());

/* 
Ejercicio 18
Creá un objeto que represente un perfil de red social con nombre de usuario, 
cantidad de seguidores y verificado (booleano). 
Agregale un método que use un ternario para mostrar el nombre con o sin el simbolo
de verificado. 
Agregale otro método con if/else para clasificar la cuenta: menos de 1.000 seguidores 
es 'cuenta nueva', entre 1.000 y 10.000 es 'cuenta en crecimiento', 
entre 10.000 y 100.000 es 'influencer', y más de 100.000 es 'cuenta masiva'.
■ Investigá: ¿Qué es la igualdad estricta === y en qué se diferencia de ==? 
Usá === en todas tus comparaciones y explicá por qué es mejor.
*/

const perfilSocial = {
    nombreUsuario: "Natfalda",
    seguidores: 234,
    verificado: true,
    simboloVerificado () {
        const check = "✓";
        return this.verificado ? `${this.nombreUsuario} ${check}` : this.nombreUsuario
    },
    clasificarCuenta () {
        if (this.seguidores < 1000){
            return "Es una cuenta nueva";
        }else if (this.seguidores >= 1000 && this.seguidores <= 10000){
            return "Cuenta en crecimiento"
        }else if (this.seguidores > 10000 && this.seguidores <= 100000){
            return "Influencer"
        }
        return "Cuenta masiva"
    }
}

console.log(perfilSocial.simboloVerificado());
console.log(perfilSocial.clasificarCuenta());

/* 
Ejercicio 19
Creá un objeto que represente un vuelo con origen, destino, hora de salida 
y si está retrasado.
Agregale un método que use template literals para mostrar la información del vuelo. 
Agregale otro método que use un ternario para mostrar el estado como 'a tiempo' o 'retrasado'. 
Agregale un tercer método con if/else para mostrar la zona horaria del origen: 
si es 'Buenos Aires' mostrar 'GMT-3', si es 'Madrid' mostrar 'GMT+1', si es 'Nueva York' 
mostrar 'GMT-5', y para cualquier otro origen mostrar 'zona horaria desconocida'.
■ Investigá: ¿Para qué sirve la cláusula else if? Es lo que necesitás para manejar 
los tres casos de zona horaria en un solo bloque.
*/

const vuelo = {
    origen: "Madrid",
    destino: "Bogota",
    horaDeSalida: "10:00",
    retrasado: false,
    informacion () {
        return `El origen de vuelo es: ${this.origen}, con destino ${this.destino}
        sale a las ${this.horaDeSalida} y ${this.infoRestraso()}`
    },
    infoRestraso (){
        return this.retrasado ? "esta retrasado": "no esta retrasado";
    },
    zonaHoraria () {
        if (this.origen === "Buenos Aires"){
            return "La zona horaria es GMT-3"
        }else if (this.origen === "Madrid"){
            return "La zona horaria es GMT+1"
        }else if (this.origen === "Nueva York"){
            return "La zona horaria es GMT-5"
        }
        return "zona horaria desconocida"
    }
}

console.log(vuelo.informacion());
console.log(vuelo.zonaHoraria());

/* 
Ejercicio 20
Creá un objeto que represente una receta con nombre, ingredientes como string 
separado por comas y tiempo de preparación en minutos. 
Agregale un método que use .split() para mostrar los ingredientes uno por uno. 
Agregale otro método con if/else para clasificar la receta como rápida
(menos de 15 minutos), normal (entre 15 y 45 minutos) o elaborada (más de 45 minutos).
■ Investigá: ¿Qué hacen .trimStart() y .trimEnd()? 
Probá aplicar .trim() al string de ingredientes completo
antes del .split() para limpiar espacios accidentales
*/

const receta = {
    nombre: "Burritos",
    ingredientes: " tortilla, aguacate, cebolla, tomate, nachos, pollo, salsas, queso",
    tiempo: 120,
    ingredienteSeparados () {
        const arrayIngredientes = this.ingredientes.trim().split(",")
        console.log(arrayIngredientes)
        return `los ingredientes son ${arrayIngredientes} y tiene ${arrayIngredientes.length} ingredientes`
    },
    tipoReceta (){
        if (this.tiempo < 15){
            return "Receta rapida"
        }else if (this.tiempo >= 15 && this.tiempo <=45){
            return "Receta normal"
        }
        return "Receta elaborada"
    }
}

console.log(receta.ingredienteSeparados());
console.log(receta.tipoReceta());

/* 
Ejercicio 21
Creá un objeto que represente un gimnasio con nombre, precio mensual y si tiene pileta. Agregale
un método que use un ternario para mostrar si incluye pileta en el plan. Agregale otro método que
reciba la cantidad de meses y calcule el costo total mostrándolo con template literals.
■ Investigá: ¿Qué hace Number()? Usalo dentro del método para asegurarte de que el parámetro de meses
sea siempre tratado como número.

*/

const gimnasio = {
    nombre: "Xtreme fitness",
    precio: 100000,
    pileta: false,
    incluyePileta(){
        return this.pileta ? "El plan incluye pileta" : "El plan no incluye pileta"
    },
    costo (meses) {
        const mesesN = Number(meses);
        const costoTotal = mesesN * this.precio;
        return `El costo total por ${mesesN} meses, es: ${costoTotal}`
    }

}

console.log(gimnasio.incluyePileta());
console.log(gimnasio.costo(7));

/* 
Ejercicio 22
Creá un objeto que represente un estudiante con nombre, carrera y promedio. Agregale un método
que use .toLowerCase() para normalizar el nombre de la carrera antes de mostrarlo. Agregale otro
método con if/else para mostrar el estado académico: promedio menor a 4 es 'en riesgo
académico', entre 4 y 5.9 es 'puede rendir con previa', y 6 o más es 'habilitado para rendir el final'.
■ Investigá: ¿Qué hace Math.round()? Usalo para redondear el promedio antes de mostrarlo.

*/

const estudiante2 = {
    nombre: "Nata",
    carrera: "Ing. Quimica",
    promedio: 8.5,
    carreraLower (){
        return `Tu carrera es: ${this.carrera.toLowerCase()}`;
    },
    estadoAcademico(){
        const promedioRedondeado = Math.round(this.promedio) 
        if (this.promedio < 4){
            return `Usted esta en riesgo academico con ${promedioRedondeado}`;
        }else if (this.promedio >= 4 && this.promedio <= 5.9){
            return `Usted puede rendir con previa, tiene un promedio de ${promedioRedondeado}`;
        }
        return `Usted esta habilitado para rendir el final con un promedio de ${promedioRedondeado}`
    },
}

console.log(estudiante2.carreraLower());
console.log(estudiante2.estadoAcademico());

/* 
Ejercicio 23
Creá un objeto que represente un producto de e-commerce con nombre, precio y categoría.
Agregale un método que use .includes() con un ternario para mostrar si pertenece a la sección de
ofertas: la categoría debe contener la palabra 'oferta' para que cuente. Agregale otro método que
muestre el nombre del producto con la primera letra en mayúscula usando .slice() y
.toUpperCase().
■ Investigá: ¿Qué hace .startsWith()? Usalo para verificar si la categoría empieza con la letra 'o' y compará
ese resultado con el de .includes().
*/

const ecommerce = {
    nombre: "humidificador",
    precio: 88000,
    categoria: "oferta Hogar",
    oferta () {
        return this.categoria.includes("oferta") ? "Este producto pertenece a la sección ofertas" : "Este producto no pertenece a la sección ofertas"
    },
    primeraMayus () {
        const primeraMayus = this.nombre.slice(0, 1).toUpperCase() + this.nombre.slice(1)
        return `El nombre del producto es: ${primeraMayus}`
    },
    startWithO () {
        
        return this.categoria.startsWith("o", 0) ? "La categoría inicia con o" : "La categoría no inicia con o"
    }
}

console.log(ecommerce.oferta()),
console.log(ecommerce.primeraMayus());
console.log(ecommerce.startWithO());

/* 
Ejercicio 24
Creá un objeto que represente un sistema de turnos con nombre del cliente, servicio y hora. La
hora se guarda como número (por ejemplo, 14 para las 14:00). Agregale un método que use .trim()
para limpiar el nombre antes de guardarlo. Agregale otro método con if/else para verificar si la hora
está dentro del horario de atención de 9 a 18: si está dentro mostrar 'Turno confirmado', si no
mostrar 'Fuera de horario de atención'.
■ Investigá: ¿Qué hace el operador ||? Usalo para que el método muestre 'Cliente sin nombre' si el campo
viene vacío después del .trim()
*/

const turnos = {
    cliente: " Nata ",
    servicio: "Enseñanza",
    hora: 15,
    limpiarNombre () {
        this.cliente = this.cliente.trim();
        if (this.cliente === "" || this.cliente === "null"){
            return "Cliente sin nombre";
        }
        return this.cliente;
        
    },
    horaAtencion () {
        return this.hora >= 9 && this.hora <= 18 ? "Turno confirmado" : "Fuera de horario de atención"
     }
}

console.log(turnos.limpiarNombre());
console.log(turnos.horaAtencion());

/* 
Ejercicio 25
Creá un objeto que represente un vehículo de delivery con patente, nombre del repartidor y
cantidad de entregas del día. Agregale un método que use un ternario para mostrar si puede tomar
más pedidos: el límite diario es 20 entregas. Agregale otro método que muestre la patente siempre
en mayúsculas y sin espacios usando .toUpperCase() y .replace().
■ Investigá: ¿Cuál es la diferencia entre .replace() y .replaceAll()? Probá qué pasa si la patente tiene más
de un espacio y usá el que corresponda.
*/

const vehiculoDelivery = {
    patente: "Patente carrito solar",
    nombre: "Alberto",
    entregas: 19,
    masPedidos () {
        return this.entregas < 20 ? `Usted puede tomar ${20 - this.entregas} pedidos más` : "Cumplio el limite, no puede tomar mas entregas";
    },
    nombrePatente () {
        return this.patente.toUpperCase().replaceAll(" ", "");
    }
}
console.log(vehiculoDelivery.masPedidos());
console.log(vehiculoDelivery.nombrePatente());

/* 
Ejercicio 26
Creá un objeto que represente un examen con materia, alumno, respuesta correcta y respuesta del
alumno. Agregale un método que use .trim() y .toLowerCase() para normalizar ambas respuestas
antes de compararlas. Usá if/else para mostrar 'Correcto' o 'Incorrecto' con el nombre del alumno y
la materia usando template literals.
■ Investigá: ¿Cuál es la diferencia entre == y ===? Explicá cuál usarías para comparar las respuestas y por
qué
*/

const examen = {
    materia: "Quimica",
    alumno: "Nata",
    correctAnswer: " Fluor",
    studentAnswer: "FluOR ",
    normalizarAnswer () {
        this.correctAnswer = this.correctAnswer.trim().toLowerCase();
        this.studentAnswer = this.studentAnswer.trim().toLowerCase();
        return `Respuesta correcta ${this.correctAnswer} y respuesta del alumno ${this.studentAnswer}`
    },
    respuesta() {
        if (this.correctAnswer === this.studentAnswer) {
            return `El alumno ${this.alumno} tuvo una respuesta CORRECTA en la materia ${this.materia}`
        }
        return `El alumno ${this.alumno} tuvo una respuesta INCORRECTA en la materia ${this.materia}`
    }
}

console.log(examen.normalizarAnswer());
console.log(examen.respuesta())

/* 
Ejercicio 27
Creá un objeto que represente una notificación con título, mensaje y prioridad ('alta', 'media' o
'baja'). Agregale un método que use if/else para mostrar el título en mayúsculas si la prioridad es
alta, en formato normal si es media, y en minúsculas si es baja. Agregale otro método que use
.length con un ternario para recortar el mensaje si supera los 50 caracteres, mostrando solo los
primeros 50 seguidos de '...'.
■ Investigá: ¿Qué hace .substring()? Compará cómo funciona con .slice() para recortar el mensaje y usá el
que te parezca más claro.

*/

const notificacion = {
    titulo: "Dia de informe",
    mensaje: "Hoy es el día del informe, dale prioridad Hoy es el día del informe, dale prioridad",
    prioridad: "alta",
    mensajePrioritario () {
        if (this.prioridad === "alta") {
            return this.titulo.toUpperCase()
        }else if (this.prioridad === "media"){
            return this.titulo
        }
        return this.titulo.toLowerCase()
    },
    mensajeCortado () {
        return this.mensaje.length > 50 ? this.mensaje.slice(0 , 50) + "..." : this.mensaje
    }
}

console.log(notificacion.mensajePrioritario());
console.log(notificacion.mensajeCortado());

/* 
Ejercicio 28
Creá un objeto que represente una farmacia con nombre, dirección y turno (booleano que indica si
está de turno esa noche). Agregale un método con un ternario para mostrar si está de turno.
Agregale otro método que use .replace() para formatear la dirección reemplazando la abreviatura
'Av.' por 'Avenida'.
■ Investigá: ¿Qué hace .endsWith()? Usalo para verificar si la dirección termina con un número y 
mostrar un mensaje distinto si no tiene numeración.
*/

const farmacia = {
    nombre: "Farmatodo",
    direccion: "Av. Santander 40-58",
    turnoNoc: true,
    turnoNocturno () {
        return this.turnoNoc ? "Esta de turno esta noche" : "No esta de turno esta noche";
    },
    direccionModificada () {
        return this.direccion.endsWith(0) ? this.direccion.replace("Av.", "Avenida") : `La direccion no termina en cero, ${this.direccion.replace("Av.", "Avenida")}`
       
    }
}

console.log(farmacia.turnoNocturno());
console.log(farmacia.direccionModificada());

/* 
Ejercicio 29
Creá un objeto que represente una cancha de fútbol con nombre, superficie y precio por hora.
Agregale un método que reciba la cantidad de horas y use if/else para calcular el precio: si se
reservan más de 3 horas se aplica un 20% de descuento, si no se cobra el precio normal. Mostrá el
nombre de la cancha con .toUpperCase() en todos los mensajes.
■ Investigá: ¿Qué hace Math.round()? Usalo para redondear el precio final al número entero más cercano y
evitar decimales extraños.
*/

const canchaFutbol = {
    nombre: "Arrayanes",
    superficie: "40 m^2",
    precioHora: 13500.82,
    precioTotal (horas) {
        const descuento = 0.2;
        if (horas <= 3){
            return `Tienes que pagar ${Math.round(this.precioHora * horas)} pesos en la cancha: ${this.nombre.toUpperCase()}`
        }
        return `Tienes que pagar ${Math.round((this.precioHora*horas)*(1-descuento))} pesos en la cancha: ${this.nombre.toUpperCase()}`
    }
}
console.log(canchaFutbol.precioTotal(4));

/* 
Ejercicio 30
Creá un objeto que represente un certificado con nombre del participante, curso y fecha. Agregale
un método que use .toUpperCase() en el nombre y template literals para generar el texto oficial del
certificado. Agregale otro método que use .length con if/else para verificar que el nombre no supere
los 40 caracteres: si los supera mostrar 'Nombre demasiado largo para el certificado'.
■ Investigá: ¿Qué hace .padEnd()? Usalo para rellenar el nombre con puntos hasta llegar exactamente a 40
caracteres si es más corto, como se hace en los diplomas
*/

const certificado = {
    participante: "Nata",
    curso: "Programación",
    fecha: "5/03/2026",
    cerificadoOficial () {
        return `¡Felicidades ${this.participante.toUpperCase()} has cumplido correctamente el curso en ${this.curso.toUpperCase()}!`
    },
    verificarNombre () {
        if(this.participante.length >= 40) {
            return "Nombre demasiado largo para el certificado"
        }
        return `Longitud del nombre OK para el certificado ${this.participante.padEnd(40, ".")}`

    }
}

console.log(certificado.cerificadoOficial());
console.log(certificado.verificarNombre());

/* 
Ejercicio 31
Creá un objeto que represente una aplicación de delivery con nombre del local, categoría y tiempo
estimado de entrega en minutos. Agregale un método que use un ternario para mostrar si la
entrega es express (menos de 30 minutos) o normal. Agregale otro método con if/else para calcular
el costo de envío según la distancia que recibe como parámetro: hasta 3 km cuesta $500, entre 3 y
7 km cuesta $900, y más de 7 km cuesta $1.500.
■ Investigá: ¿Qué son los if/else anidados? Usá ese concepto para agregar un caso especial: si la distancia
supera los 15 km mostrar 'Zona sin cobertura' antes de calcular el costo
*/

const aplicacionDelivery = {
    nombre: "Frisby",
    categoria: "Alimentos",
    tiempoEntrega: 60,
    entrega () {
        return this.tiempoEntrega < 30 ? "Entrega Express" : "Entrega normal";
    },
    costoEnvio (distancia) {
        if (distancia <= 3){
            return "tu costo de envío es $500"
        }else if (distancia > 3 && distancia <= 7){
            return "tu costo de envio es $900"
        }else {
            if (distancia > 15){
                return "Zona sin cobertura"
            }
            return "Tu costo de envio es $1500"
        }
        
    }
}
console.log(aplicacionDelivery.entrega());
console.log(aplicacionDelivery.costoEnvio(15));

/* 
Ejercicio 32
Creá un objeto que represente un ticket de soporte con número, descripción del problema y estado
('abierto', 'en progreso' o 'cerrado'). Agregale un método con if/else para cambiar el estado al
siguiente en la secuencia: 'abierto' pasa a 'en progreso', 'en progreso' pasa a 'cerrado', y si ya está
'cerrado' mostrar 'El ticket ya está cerrado'. Agregale otro método que use .slice() para mostrar solo
los primeros 30 caracteres de la descripción como resumen.
■ Investigá: ¿Qué pasa cuando reasignás una propiedad de un objeto con =? Verificá que el estado del
objeto cambia de verdad llamando al método dos veces seguidas
*/

const ticket = {
    numero: 12345,
    descripcion: "Problemas en consola cuando se ejecuta los test",
    estado: "abierto",
    newEstado () {
        if (this.estado === "abierto") {
            this.estado = "en progreso";
            return `Su nuevo estado es ${this.estado}`
        }else if (this.estado === "en progreso"){
            this.estado = "cerrado";
            return `Su nuevo estado es ${this.estado}`
        }
        return "Su ticket ya esta cerrado"
    },
    descripcionCorta () {
        return `${this.descripcion.slice(0,30)+ "..."}`
    }
}

console.log(ticket.newEstado());
console.log(ticket.descripcionCorta());

/* 
Ejercicio 33
Creá un objeto que represente una playlist con nombre, género y canciones guardadas como string
separado por |. Agregale un método que use .split() para mostrar cuántas canciones tiene.
Agregale otro método con if/else para mostrar la recomendación de volumen según el género:
'rock' → 'Volumen alto, 80%', 'jazz' → 'Volumen medio, 50%', 'clasica' → 'Volumen bajo, 30%',
cualquier otro género → 'Volumen a gusto'.
■ Investigá: ¿Qué pasa si aplicás .trim() al string completo de canciones antes del .split()? Probá qué ocurre
si algún nombre de canción tiene un espacio antes o después del separador |
*/

const playlist = {
    nombre: " Nata Playlist ",
    genero: "pop-rock",
    canciones: " I'm yours | skyfull of stars | yellow | Best I ever had | Las de la intuición ",
    numCanciones (){
        numeCanciones = this.canciones.trim().split("|")
        console.log(numeCanciones)
        return `El número de canciones es: ${numeCanciones.length}`
    },
    volumen(){
        if (this.genero.includes("rock")){
            return "Volumen alto, 80%"
        }else if (this.genero.includes("jazz")){
            return "Volumen medio, 50%"
        } else if (this.genero.includes("clasica")){
            return "Volumen bajo, 30%"
        } return 'Volumen a gusto'
        
    }

}

console.log(playlist.numCanciones());
console.log(playlist.volumen());

/* 
Ejercicio 34
Creá un objeto que represente un hotel con nombre, categoría en estrellas y precio por noche.
Agregale un método que reciba la cantidad de noches y use if/else para aplicar descuento: menos
de 3 noches sin descuento, entre 3 y 6 noches 10% de descuento, 7 o más noches 20% de
descuento. Agregale otro método que use template literals y .repeat() para mostrar las estrellas del
hotel visualmente con el símbolo de estrella.
■ Investigá: ¿Qué hace .repeat()? Ya lo usás para las estrellas. Ahora investigá si podés usarlo para
generar una barra visual con el carácter # según el porcentaje de descuento.
*/

const hotel = {
    nombre: "El gran hotel de Budapest",
    categoria: 5,
    precioNoche: 1000000,
    precioTotal(noches){
        if (noches < 3){
            return `El precio total es: ${noches * this.precioNoche}.`
        }else if (noches >= 3 && noches <= 6){
            return `El precio total es: ${(noches * this.precioNoche)* (1-0.1)}`
        }else if (noches > 6){
            return `El precio total es: ${(noches * this.precioNoche)* (1-0.2)}`
        }return "No enviaste un numero de noches valido"
    },
    estrellas(){
        return `El número de estrellas del hotel es: ${"☆".repeat(this.categoria)}`
    }
}

console.log(hotel.precioTotal(10));
console.log(hotel.estrellas())

/* 
Ejercicio 35
Creá un objeto que represente un contrato con cliente, servicio y duración en meses. Agregale un
método que reciba los meses restantes como parámetro y use if/else para mostrar si el contrato
está vigente (más de 2 meses restantes), por vencer (1 o 2 meses restantes) o vencido (0 meses o
menos). Mostrá todos los datos con template literals y el nombre del cliente siempre en
mayúsculas.
■ Investigá: ¿Qué hace el operador <=? Usalo en tus condiciones y explicá la diferencia con <
*/

const contrato = {
    cliente: "Nataly",
    servicio: "Tutorias",
    duracion: 6,
    vigencia(mesesRestantes){
        if(mesesRestantes > 2){
            return `Contrato vigente para el cliente ${this.cliente.toUpperCase()} por el servicio de ${this.servicio}`
        }else if (mesesRestantes >=1 && mesesRestantes <= 2){
            return `Contrato por vencer para el cliente ${this.cliente.toUpperCase()} por el servicio de ${this.servicio}`
        }return `Contrato vencido para el cliente ${this.cliente.toUpperCase()} por el servicio de ${this.servicio}`
    }

}

console.log(contrato.vigencia(2))

/* 
Ejercicio 36
Creá un objeto que represente un chatbot con nombre y cuatro respuestas guardadas como un
string separado por |. Agregale un método que use .split() e if/else para seleccionar una respuesta
según el número que recibe como parámetro (1, 2, 3 o 4). Si el número está fuera de ese rango,
mostrar 'Opción inválida'. Agregale otro método que muestre el nombre del bot con .toUpperCase()
y la cantidad de respuestas disponibles.
■ Investigá: ¿Qué hace el operador && dentro de un if? Usalo para validar dos condiciones a la vez: que el
número recibido sea mayor a 0 Y menor o igual a 4.

*/

const chatbot = {
    nombre: "El facilon",
    respuestas: " Si | Claro | Por supuesto | Obvio ",
    seleccionRespuesta (numero) {
        const arrayRespuestas = this.respuestas.split("|")
        if (numero === 1){
            return `Tu respuesta es: ${arrayRespuestas[numero-1]}`
        }else if (numero === 2) {
            return `Tu respuesta es: ${arrayRespuestas[numero-1]}`
        }else if (numero === 3) {
            return `Tu respuesta es: ${arrayRespuestas[numero-1]}`
        }else if (numero === 4) {
            return `Tu respuesta es: ${arrayRespuestas[numero-1]}`
        }return "Opcion invalida"
    },
    nombreBot(){
        return `El nombre del bot es: ${this.nombre.toUpperCase()} y la cantidad de respuestas disponibles es ${this.respuestas.split("|").length}`
    }
}

console.log(chatbot.seleccionRespuesta(1));
console.log(chatbot.nombreBot());