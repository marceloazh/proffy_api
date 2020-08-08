import path from 'path';

module.exports = { //tem que ser dessa forma, o KNEX não entende o export default.
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    useNullASDefault: true,
};