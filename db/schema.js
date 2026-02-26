#! /usr/bin/env node

require("dotenv").config();
const { Client } = require("pg");
const seedData = require("./seed");

const SQL = `
DROP TABLE IF EXISTS cars;
DROP TABLE IF EXISTS categories;

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT
);

CREATE TABLE cars (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    brand VARCHAR(100) NOT NULL,
    price NUMERIC(10,2) NOT NULL CHECK (price > 0),
    category_id INTEGER NOT NULL REFERENCES categories(id) ON DELETE CASCADE
);
`;

async function main() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  await client.connect();

  await client.query(SQL);
  await seedData(client);

  await client.end();
  console.log("Done");
}

main();