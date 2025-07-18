const database = require('./../connection/database');

async function insert() {
    // INSERT INTO
}

async function all() {
    let dados = await database.execute('SELECT * FROM tb_categoria');

    return dados; 
}

async function find(id) {
    let dados = await database.execute(`
        SELECT * FROM tb_categoria WHERE id=${id}
    `);

    return dados[0]; //retorna o unico que encontrou 
}

async function remove(id) {
    await database.execute(`
        DELETE FROM tb_categoria WHERE id=${id}
    `);
}

async function update() {
    // UPDATE..
}

module.exports = {
    all,
    find,
    insert,
    remove,
    update
};