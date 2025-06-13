// index.js
const sequelize = require("./_connection");
// Load associations
require("./_associations");
// Import models directly
const User = require("./User");
const Video = require("./Video");
const Action = require("./Action");
const CompetitionContract = require("./CompetitionContract");
const Complex = require("./Complex");
const GroupContract = require("./GroupContract");
const League = require("./League");
const Match = require("./Match");
const OpponentServeTimestamp = require("./OpponentServeTimestamp");
const Player = require("./Player");
const PlayerContract = require("./PlayerContract");
const Point = require("./Point");
const Script = require("./Script");
const SyncContract = require("./SyncContract");
const Team = require("./Team");

module.exports = {
  sequelize,
  User,
  Video,
  Action,
  CompetitionContract,
  Complex,
  GroupContract,
  League,
  Match,
  OpponentServeTimestamp,
  Player,
  PlayerContract,
  Point,
  Script,
  SyncContract,
  Team,
};
