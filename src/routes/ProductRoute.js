const mysql = require('mysql2/promise'); 
const app = require('express').Router();

//criando a rota de "buscar" (GET) produtos
app.get('/api/produtos', async (req, res) => {

    let conexao = await mysql.createConnection({
        host: 'localhost',
        user: 'alessandro', //root
        password: 'livre', //col123
        database: 'db_clubedovinho',
    });

    let sql = "SELECT * FROM tb_produto";

    const [results, fields] = await conexao.query(sql);

    let dados = results;

    res.status(200);
    res.send(dados);
});

module.exports = app;