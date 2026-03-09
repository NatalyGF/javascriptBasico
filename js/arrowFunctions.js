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