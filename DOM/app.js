const inputTarea = document.querySelector("#input-tarea");
const botonAgregar = document.querySelector("#btn-agregar");
const listaTareas = document.querySelector("#lista-tareas");

// Función principal reutilizable (sirve tanto para el clic como para Enter)
function agregarNuevaTarea() {
  const texto = inputTarea.value.trim();

  if (texto === "") return; // Evita agregar tareas vacías

  const nuevoItem = document.createElement("li");
  nuevoItem.textContent = texto;

  nuevoItem.addEventListener("click", () => {
    nuevoItem.remove();
  });

  listaTareas.appendChild(nuevoItem);
  inputTarea.value = "";
  inputTarea.focus(); // Mantiene el cursor listo para escribir otra tarea
}

// 1. Ejecutar al hacer clic en el botón
botonAgregar.addEventListener("click", agregarNuevaTarea);

// 2. Ejecutar al presionar la tecla Enter en el input
inputTarea.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter") {
    agregarNuevaTarea();
  }
});