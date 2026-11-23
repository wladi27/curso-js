//Operador de Coalescencia Nula
const productosEnCarrito = 0; // El usuario tiene 0 productos (dato válido)

// Con || (ERROR común): interpreta el 0 como falso y muestra 10
const totalMal = productosEnCarrito || 10; // Resultado: 10 ❌

// Con ?? (CORRECTO): respeta el 0 porque no es null ni undefined
const totalBien = productosEnCarrito ?? 10; // Resultado: 0 ✅

// Solo usa el respaldo si el dato realmente no existe:
const usuarioSinDefinir = null;
const nombre = usuarioSinDefinir ?? "Invitado"; // Resultado: "Invitado" ✅



