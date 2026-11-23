//Operador Ternario
const edad = 20;

// Forma larga con if:
let acceso;
if (edad >= 18) {
  acceso = "Permitido";
} else {
  acceso = "Denegado";
}

// Forma limpia con Ternario:
const accesoRapido = edad >= 18 ? "Permitido" : "Denegado";