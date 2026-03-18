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
