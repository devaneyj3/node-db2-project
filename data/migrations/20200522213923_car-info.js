
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        // creates a primary key called id
        tbl.increments();
        // creates a text field called name which is both required and unique
        tbl.integer('VIN').unique().notNullable();
        tbl.text('Make', 128).notNullable();
        // creates a numeric field called budget which is required
        tbl.text('Model').notNullable();
        tbl.decimal('Mileage').notNullable();
        tbl.text('Transmission').notNullable();
        tbl.text('Title').notNullable();
  });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('cars')
};
