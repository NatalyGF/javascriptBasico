console.log("Bienvenidos a arrow functions")
//Explicación arrow function

//diferencia sintaxis

const verifyIsMajor = (age) => {
    if (age >= 18) {
        return true;
    }
    return false
}

console.log(verifyIsMajor(19));

//Operador ternario

// expresion ? 'console.log("true")' : console.log("aqui");

const verifyAge = (age, DNI) => {
    age >= 18 && DNI ? console.log ("es mayor de edad") : console.log("es menor de edad")
    // o puede ser
    // return age >= 18 ? "es mayor de edad" : "es menor de edad"
}

verifyAge(18, true)

////////////////////////////////////////

const regalarleCarro = () => {
    return "le regalo un carro"
}

const regalarleBici = () => {
    return "le regalo una bici"
}

const verifyregalo = (age) => {
    return age >= 18 ? regalarleCarro() : regalarleBici()
    // o puede ser
    // return age >= 18 ? "es mayor de edad" : "es menor de edad"
}

console.log(verifyregalo(18))

