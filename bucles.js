// BUcles 

// for 
for (let i = 1; i <=5; i++ ) {
    console.log("Numero: " + i);
    if(i ==3)
    break;    
}


// While - Cuando no se sabe cuantas veces se repite el bucle
let edad = 30;

while (edad > 0) {
    console.log (" Mi edad es: " + edad);
    edad--;
}

// Do While

let passwordCorrecta = false;
passwordCorrecta = true;

do {
    console.log("Mostrando pantalla de inicio de sesión...");
} while (passwordCorrecta === false);

// for .... of 
const frutas = ["Manzana", "Pera", "Uva"];

for (const fruta of frutas) {
    console.log("Me gusta comer " + fruta);
}

// Los métodos funcionales de array en JavaScript

//.map()
const precios = [150, 324, 745];

const preciosConIva = precios.map ((precio) => {
    return precio * 1.16;
});
console.table(preciosConIva);

//filter()  --- Selección bajo condición
//Recorre el array haciendo una pregunta de 
// sí o no (true o false) a cada elemento

const notas = [8, 15, 10, 5, 19];

const aprobados = notas.filter((nota) => {
    return nota > 10;
});
console.table(aprobados);

// .reduce() — Acumulación de valores
const gastos = [50, 20, " Puntos"];

const total = gastos.reduce((acumulador, gasto) => {
    return acumulador + gasto;
}, 0);
console.table(total);

// .find() — Búsqueda del primer coincidente
const usuarios = [
    { id: 1, nombre: "Ana"},
    { id: 2, nombre: "Luis"},
    { id: 3, nombre: "Luis"}
];

const usuarioBuscado = usuarios.find((user) => {
    return user.id === 2;
});
console.log(usuarioBuscado);

// Ejercicio
const productos = [
  { id: 1, nombre: "Laptop", precio: 800, categoria: "Tecnología", stock: 5 },
  { id: 2, nombre: "Mouse", precio: 20, categoria: "Tecnología", stock: 0 },
  { id: 3, nombre: "Escritorio", precio: 150, categoria: "Hogar", stock: 3 },
  { id: 4, nombre: "Silla Gamer", precio: 250, categoria: "Hogar", stock: 2 },
  { id: 5, nombre: "Teclado", precio: 50, categoria: "Tecnología", stock: 10 }
];
/* 
Ejercicio 1: .map() 
Consigna para el estudiante:
La tienda quiere mostrar en su página web una lista solo con los nombres de 
los productos en MAYÚSCULAS. Crea un nuevo array llamado nombresMayusculas 
y muéstralo en consola.
- Pista: Usa el método de string .toUpperCase() dentro del .map().
 */