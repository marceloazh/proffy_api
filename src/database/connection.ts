import knex from 'knex';
import path from 'path'; //esse eu não conhecia... para facilitar na hora de procurar diretorios dentro da aplicação.

//MIGRATIONS: para controlar a versão do bando de dados.

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,//sqlite não sabe o que jogar nos campos não preenchidos. assim, jogará NULL.
});

export default db;