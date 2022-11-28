const app = require('./app');
const Loaders = require('./loaders');
const PORT = process.env.PORT || 3000;
Loaders.start();

app.listen(PORT, () =>
    console.log("Servidor iniciado na porta $PORT: http://localhost:3333/")
);