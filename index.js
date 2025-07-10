const express = require('express');
const productRoute = require('./src/routes/ProductRoute');

//iniciando o express
const app = express();

//adicionando as rotas de produto ao express
app.use(productRoute);

//subindo o servidor
app.listen(8001, () => {
    console.log('API rodando no endereco http://localhost:8001');
});

//npx nodemon index.js
