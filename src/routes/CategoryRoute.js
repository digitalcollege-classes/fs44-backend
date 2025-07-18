const Categoria = require('./../model/Categoria'); 
const app = require('express').Router();

app.get('/api/categorias', async (req, res) => {
    res.send(await Categoria.all());
});

app.get('/api/categorias/:id', async (req, res) => {
    let dados = await Categoria.find(req.params.id);

    if (!dados) {
        res.status(404).send({
            error: "Categoria nao encontrada"
        });
        return;
    }

    res.send(dados);
});

app.delete('/api/categorias/:id', async (req, res) => {
    await Categoria.remove(req.params.id);
    
    res.status(204).send();
});

module.exports = app;