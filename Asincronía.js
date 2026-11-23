async function miFuncionAsincrona() {
    console.log('Inicio de la función asíncrona');

    // Esperamos 2 segundos
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Fin de la función asíncrona');
}
miFuncionAsincrona();

async function obtenerUsuarios() {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!respuesta.ok) {
            throw new (`Error HTTP: ${respuesta.status}`);
        }

        const usuarios = await respuesta.json();
        console.table(usuarios);

    } catch (error) {
        console.error("Hubo un error al obtener los usuarios:", error.message);
    }
}

obtenerUsuarios();

