// backend/database.js
const { Sequelize } = require('sequelize');

// Inisialisasi SQLite dengan Sequelize
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'  // Nama file database
});

module.exports = sequelize;
