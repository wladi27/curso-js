// tipos de Datos en JavaScript

console.log(typeof "Hola"); // String
console.log(typeof 123); // Number
console.log(typeof true); // Boolean
console.log(typeof {}); // Object
console.log(typeof []); // Array
console.log(typeof function () {}); // Function

const TiposDeDatos = {
  Nombre: "Wladi",
  Edad: 26,
  EsDesarrollador: true,
  Stack: {
    Frontend: ["HTML, CSS, JAVASCRIPT, REACT, NEXT.JS, VUE.JS"],
    Backend: ["NODE.JS, PYTHON, RUBY, JAVA"],
    BasesDeDatos: ["MYSQL, POSTGRESQL, MONGODB"],
    Despliegue: ["AWS", "AZURE", "GOOGLE CLOUD"],
  },
};
console.log(TiposDeDatos.Stack.Frontend[0]);

function obtenerFechaYHora() {
  const fecha = new Date();

  return fecha.toLocaleString("es-VE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
}

console.log(obtenerFechaYHora());

// Tipos de Referencia
(Object, Array, Function, Date, Map, Set, RegExp);

const frutas = {
    mango: {
        tamaño :{
            pequeño : ["Jardin", "Dudu"]
        }
    }
}
console.log("Mango "+frutas.mango.tamaño.pequeño[1]);