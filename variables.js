// Tipos de Variables
var VariableVar = 10 ;
let VariableLet = 5;



//Semantica de variables
const user = {
    nombre: "Sergio",
    edad: 18
};

user.nombre = "Juan";
console.log(user.nombre);

var Juego = {
    nombr: "FIFA",
    precio: "67,99$"
};
console.log(Juego);

let producto = {
    nombre: "Laptop",
    precio: 750
}

producto = {
    nombre: "Mouse",
    precio: 50
};

console.log(producto);

function ListarProducto() {
    let producto = {
        nombre: "Cargador",
        stock: 15
    }
    console.log(producto);
}
ListarProducto();

plato = {
    nombre: "Pollo a la Brasa",
    precio: 50,
    ingredientes: ["Agua", "Pollo", "Sal"]
}
console.log(plato);

