const sequelize = require("../bin/dbConnection");
const users = require("./definitions/users");
const tasks = require("./definitions/task");
const tasksHasUsers2 = require("./definitions/taskHasUsers");
const taskifyTable = require("./definitions/taskNo4");
const models = { users, tasks, tasksHasUsers2, taskifyTable };

const db = {};
db.sequelize = sequelize; //created new key in db object
sequelize.models = models; //gave value to the sequelize models

module.exports = { db, models };
