const express = require('express');
const app = express();

// Ruta para generar los datos aleatorios
app.get('/evaluation-dev', (req, res) => {
    const cantidadDatos = 100000;
    const datos = [];

    for (let i = 0; i < cantidadDatos; i++) {
        const tipoDato = Math.floor(Math.random() * 3); // 0: entero, 1: flotante, 2: booleano

        switch (tipoDato) {
            case 0:
                datos.push(Math.floor(Math.random() * 1000)); // Genera un entero entre 0 y 999
                break;
            case 1:
                datos.push(Math.random() * 1000); // Genera un flotante entre 0 y 999
                break;
            case 2:
                datos.push(Math.random() < 0.5); // Genera un booleano aleatorio
                break;
        }
    }

    res.json(datos);
});

// Puerto en el que escucha el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
