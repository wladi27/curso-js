//Encadenamiento Opcional
const usuario = {
  nombre: "Carlos"
  // Nota: no tiene la propiedad 'perfil'
};

// Sin ?. -> 💥 CRASH: TypeError: Cannot read properties of undefined (reading 
// 'direccion')
// console.log(usuario.perfil.direccion);

// Con ?. -> Se detiene en 'perfil?' y devuelve undefined sin errores
console.log(usuario?.perfil?.direccion); // Resultado: undefined ✅

// Combinación estrella (?. + ??): lees seguro y das un valor por defecto
const direccionFinal = usuario?.perfil?.direccion ?? "Dirección no registrada";
console.log(direccionFinal); // Resultado: "Dirección no registrada" ✅