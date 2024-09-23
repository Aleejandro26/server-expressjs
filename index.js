// Importamos el módulo express, que es un framework para Node.js
const express = require("express");
// Creamos una instancia de la aplicación Express
const app = express();
// Definimos el puerto en el que nuestro servidor escuchará las solicitudes
const port = 3000;

// Definimos una ruta para la raíz de la aplicación ("/")
// Cuando alguien accede a esta ruta, se ejecuta la función proporcionada
app.get("/", (req, res) => {
    // Enviamos una respuesta simple con el texto "¡Hola Mundo!"
    res.send("¡Hola Mundo!");
});

// Iniciamos el servidor y lo ponemos a escuchar en el puerto definido
app.listen(port, () => {
    // Una vez que el servidor está en funcionamiento, imprimimos un mensaje en la consola
    console.log(`El servidor está corriendo en el puerto: ${port}`);
});
