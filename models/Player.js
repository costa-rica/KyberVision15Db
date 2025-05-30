// NR: refactored 2025-03-13
// const { DataTypes } = require("sequelize");
// // const { sequelize } = require("./_connection");
// const { sequelize } = require("./_sequelize");
const { DataTypes } = require("sequelize");
const sequelize = require("./_connection");

const Player = sequelize.define(
  "Player",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "players",
  }
);

module.exports = Player;
