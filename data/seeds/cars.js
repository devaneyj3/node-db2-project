
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, VIN: 3, Make: 'Toyotta', Model: 'Camry', Mileage: 2, Transmission: "V-88", Title: "SuperOmega"},
        { id: 2, VIN: 888888, Make: 'GMC', Model: 'Delorian', Mileage: 200000, Transmission: "V-999", Title: "Clean" },
        {id: 3, VIN: 999999998, Make: 'Ford', Model: 'Bat Mobile', Mileage: 20000000, Transmission: "V-200009", Title: "The Joker"},
      ]);
    });
};
