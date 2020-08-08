import Knex from 'knex';

export async function up(knex: Knex) { //para fazer as alterações no banco de dados
    return knex.schema.createTable('class_schedule', table => { //arrow function que recebe como parâmetro table...
        table.increments('id').primary();
        
        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onUpdate('CASCADE') //no caso de update na tabela, ou seja, migrate UP
            .onDelete('CASCADE'); //caso o item referenciado for deletado, o que acontece com os dados desta tabela aqui, classes. Cascade faz com que todos sejam deletados.
    });
};

export async function down(knex: Knex) {//para desfazer em caso de merrrrrda
    return knex.schema.dropTable('class_schedule');
};