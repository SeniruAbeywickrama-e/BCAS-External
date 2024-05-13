const config = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorsAliases: 0,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

const directLeeds = require('./directLeeds.model');
const counsellor = require('./counsellor.model');
const course = require('./course.model');
const courseBranch = require('./courseBranch.model');
const directLeadTypes = require('./directLeadTypes.model');
const eventHistory = require('./eventHistory.model');
const leeds = require('./leeds.model');
const user = require('./user.model');


const models = [
    directLeeds,
    counsellor,
    course,
    courseBranch,
    directLeadTypes,
    eventHistory,
    leeds,
    user
];

const db = {};

models.forEach((modelInit) => {
    const model = modelInit(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
});

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});


db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.ROLES = ["user", "admin"];
module.exports = db;
