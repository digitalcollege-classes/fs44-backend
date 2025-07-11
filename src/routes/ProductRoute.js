const database = require('./../connection/database'); 
const app = require('express').Router();

//criando a rota de "buscar" (GET) produtos
app.get('/api/produtos', async (req, res) => {
    let dados = await database.execute('SELECT * FROM tb_produto');

    res.status(200);
    res.send(dados);
});

app.get('/api/produtos/:id', async (req, res) => {
    let id = req.params.id; //recuperando o id da URL

    let dados = await database.execute(`
        SELECT * FROM tb_produto WHERE id=${id}
    `);

    if (dados.length === 0) {
        res.status(404).send();
        return;
    }

    res.send(dados[0]);
});


app.delete('/api/produtos/:id', async (req, res) => {
    let id = req.params.id;

    await database.execute(`DELETE FROM tb_produto WHERE id=${id}`);

    res.status(204).send();
});

// app.use(express.json());
// TODO: retornar os dados que foram inseridos no banco
app.post('/api/produtos', async (req, res) => {
    let {nome, categoria, valor} = req.body;

    let sql = `
        INSERT INTO tb_produto (nome, categoria, valor)
        VALUES('${nome}', '${categoria}', '${valor}')
    `;

    await database.execute(sql);

    res.status(201).send();
});

// TODO: permitir alterar apenas alguns valores caso queira
app.patch('/api/produtos/:id', async (req, res) => {
    let id = req.params.id;

    let {nome, valor, categoria} = req.body;

    let sql = `
        UPDATE tb_produto SET
            nome      = '${nome}',
            categoria = '${categoria}',
            valor     = '${valor}'
        WHERE id=${id}    
    `;

    await database.execute(sql);

    res.send();
});


module.exports = app;