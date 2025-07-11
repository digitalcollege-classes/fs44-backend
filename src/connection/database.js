const mysql = require('mysql2/promise');

async function execute(sql) {
    let conexao = await mysql.createConnection({
        host: 'localhost',
        user: 'alessandro', //root
        password: 'livre', //col123
        database: 'db_clubedovinho',
    });

    const [results, fields] = await conexao.query(sql);

    return results;
}

module.exports = {
    execute
};
