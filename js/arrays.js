console.log("Arrays en javascript");

const names = ["ana", "Lina", "Luisa", "Nataly", "Juliana", "Jerel"];

console.log(names)
console.log(names.length);
console.log(names[0]);

// ultimo elemento del array
 console.log(names.length-1);

 // names.push("juana de arco") // agregar un nuevo elemento al array

 console.log("nuevo tamaño del array", names.push("juana de arco") );

 // pop() quita el ultimo elemento del array y lo devuelve, si el array esta vacio es undefined

 names.pop("elemento eliminado es: ", names.pop());

 console.log(names);

 // agrega un nuevo elemento al inicio del array
 names.unshift("maria jose");
 console.log(names);

 //quitar el primer elemento del array 

 names.shift();
 console.log(names)

 const metodosHTPP = ["GET", "POST", "PUT", "DELETE", "PATCH"];

 // Includes mira si algo esta pero diferencia entre mayusculo o minuscula, Devuelve solo true o false

 //indexOf()

 console.log(metodosHTPP.indexOf("POST")) //SOLO RETORNA LA POSICION DE LA PRIMERA COINCIDENCIA Y DEVUELVE -1 SI NO HAY 
 // COINCIDENCIA, distingue entre mayus y minuscula

 // como iteramos en un array

 //for... of nos permite pasar por cada elemento del array

 for(const statusCode of metodosHTPP){
    console.log("cada codigo: ", statusCode)
 }

 const personas = [
    {nombre: "Nataly", apellido: "Gutierrez", edad: 35 },
    {nombre: "Luisa", apellido: "Hernandez", edad: 35 },
    {nombre: "Lina", apellido: "Minotta", edad: 36 },
 ]

 for ( const persona of personas){
    console.log("nombre de la persona: ", persona.nombre);
    console.log("El apellido de la persona es: ",persona.apellido);
 }

 const procudts = [
    {id:102, nombre:"laptop",precio:2000},
    {id:103, nombre:"celular",precio:1000},
    {id:104, nombre:"tablet",precio:1500},
    {id:105, nombre:"monitor",precio:500},
]

// recorrer el array y mostrar el nombre y el precio de cada producto

for(const producto of procudts){
    console.log(`El precio del producto ${producto.nombre} es: $${producto.precio}`)
}