const app = require('./app');
const Loaders = require('./loaders');

Loaders.start();

app.listen(3333, () =>
    console.log("Servidor iniciado na porta 3333: http://localhost:3333/")
);