const ticket1 = {
    id: "TKT-001",
    titulo: "Login no responde",
    prioridad: "alta",
    estado: "abierto",
    categoria: "auth",
    resumen(){
        return `[${this.id}] ${this.titulo} - Prioridad: ${this.prioridad} `
    }
}

console.log(ticket1.id);
console.log(ticket1.titulo);
console.log(ticket1.estado);
console.log(ticket1.resumen())

const tickets = [
    {id: "TKT-001", titulo: "Login no responde", prioridad: "alta", estado: "abierto", categoria: "auth"},
    {id: "TKT-002", titulo: "Productos no cargan", prioridad: "media", estado: "en progreso", categoria: "productos"},
    {id: "TKT-003", titulo: "Error al procesar pago", prioridad: "alta", estado: "abierto", categoria: "pagos"},
    {id: "TKT-004", titulo: "Filtro de búsqueda roto", prioridad: "baja", estado: "cerrado", categoria: "productos"},
    {id: "TKT-005", titulo: "Sesión expira muy rápido", prioridad: "media", estado: "abierto", categoria: "auth"},
    {id: "TKT-006", titulo: "Email de confirmación no llega", prioridad: "alta", estado: "en progreso", categoria: "notificaciones"},
    {id: "TKT-007", titulo: "Precio incorrecto en carrito", prioridad: "alta", estado: "abierto", categoria: "pagos"},
    {id: "TKT-008", titulo: "Botón de logout no funciona", prioridad: "baja", estado: "cerrado", categoria: "auth"}
]

console.log(`Usted tiene: ${tickets.length} tickets`)

for (const ticket of tickets){
    console.log( `${ticket.id} | ${ticket.titulo}`)
}

const clasificarPrioridad = (ticket) => {
        if (ticket.prioridad === "alta"){
            console.log( `🔴 ${ticket.id} | ${ticket.titulo}`)
        } else if (ticket.prioridad === "media"){
            console.log( `🟡 ${ticket.id} | ${ticket.titulo}`)
        }else{
            console.log( `🟢 ${ticket.id} | ${ticket.titulo}`)
        }
    
    }

    for (const ticket of tickets){
        (clasificarPrioridad(ticket))
    }

    const mostrarEstado = (ticket) => {
        ticket.estado === "cerrado" ? console.log(`[CERRADO] ${ticket.id} | ${ticket.titulo}`) : 
                                    console.log(`[ACTIVO] ${ticket.id} | ${ticket.titulo}`)
    }

    for (const ticket of tickets) {
        mostrarEstado(ticket)
    }

    let abiertos = 0;
    let enProgreso = 0;
    let cerrados = 0;

    for (const ticket of tickets){
        if(ticket.estado.toLowerCase() === "abierto"){
            abiertos = abiertos + 1; 
        }else if (ticket.estado.toLowerCase() === "en progreso"){
            enProgreso = enProgreso + 1;
        }else if(ticket.estado.toLowerCase() === "cerrado"){
            cerrados = cerrados +1;
        }else {
            console.log(`El ticket ${ticket.id} no contiene un estado valido`)
        }
        

    }

    console.log(`Abiertos: ${abiertos}`);
    console.log(`En progreso: ${enProgreso}`);
    console.log(`Cerrados: ${cerrados}`);

const categorias = ["auth", "pagos", "productos", "notificaciones"];

const verificarCategorias = (cat) => {
    cat = cat.toLowerCase();
    if(categorias.includes(cat)){
        return `✅ La categoria ${cat} esta registrada`
    } return `❌ La categoria ${cat} no esta registrada`

}

console.log(verificarCategorias("reportes"))

// find

/*
const nombres = ["Juan", "Maria", "Pedro", "Ana", "Luis"];

const verifyName = (name) => {
    return nombres.find(n => n === name)
    }

    console.log(verifyName("jerel"));

*/

const buscarTicket = (idBuscado) => {
    const resultado = tickets.find(ticket => ticket.id === idBuscado);
    if(resultado != undefined){
        return `Ticket encontrado: [${resultado.id}] ${resultado.titulo} - ${resultado.prioridad} - ${resultado.categoria}`
    }return `❌ No existe nngun ticket con el id "${idBuscado}"`

}

console.log(buscarTicket("TKT-003"));

let alta = 0;
let ticketAbierto = 0;
let altaAbierto = 0;

const reporteFinal = () => {
    for (const ticket of tickets) {
        if(ticket.prioridad === "alta") {
            alta = alta +1
        }
        if(ticket.estado === "abierto"){
            ticketAbierto = ticketAbierto +1
        }
        if (ticket.prioridad === "alta" && ticket.estado === "abierto")
            altaAbierto = altaAbierto +1

    }
console.log(`Total de tickets: ${tickets.length}`);
console.log(`Prioridad alta: ${alta}`);
console.log(`Tickets abiertos: ${ticketAbierto}`);

    if(altaAbierto >= 3 ){
        console.log( "Estado del sistema: CRITICO")
    }else if ( altaAbierto >=1 && altaAbierto <= 2){
        console.log( "Estado del sistema: ESTABLE" )
    }else {    console.log( "Estado del sistema: ESTABLE") }
}

reporteFinal();


