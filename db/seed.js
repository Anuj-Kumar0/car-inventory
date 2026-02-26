async function seedData(client) {
    await client.query(`
      INSERT INTO categories (name, description) VALUES
      ('Hatchback', 'Compact city cars'),
      ('Sedan', 'Comfortable family cars'),
      ('SUV', 'Sport Utility Vehicles'),
      ('Supercar', 'High performance sports cars'),
      ('Hypercar', 'Extreme performance cars');
    `);
  
    await client.query(`
      INSERT INTO cars (name, description, brand, price, category_id) VALUES
      ('Civic', 'Reliable compact car', 'Honda', 22000, 1),
      ('Corolla', 'Fuel efficient sedan', 'Toyota', 24000, 2),
      ('Model X', 'Electric luxury SUV', 'Tesla', 90000, 3),
      ('Huracan', 'V10 Italian supercar', 'Lamborghini', 260000, 4),
      ('Chiron', 'Quad turbo hypercar', 'Bugatti', 3000000, 5);
    `);
  }
  
  module.exports = seedData;