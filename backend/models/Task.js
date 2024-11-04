// backend/models/Task.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

// Definisikan model Task
const Task = sequelize.define('Task', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  deadline: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Task;
