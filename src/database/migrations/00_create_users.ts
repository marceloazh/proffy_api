import Knex from 'knex';

export async function up(knex: Knex) { //para fazer as alterações no banco de dados
    return knex.schema.createTable('users', table => { //arrow function que recebe como parâmetro table...
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    });
};

export async function down(knex: Knex) {//para desfazer em caso de merrrrrda
    return knex.schema.dropTable('users');
};