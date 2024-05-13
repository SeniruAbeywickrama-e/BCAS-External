const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bcas_stage', 'admin', 'BcasDev#2023', {
    host: 'bcas-dev.c0e2davpoehp.ap-south-1.rds.amazonaws.com',
    dialect: 'mysql',
});

const directLeeds = require('../models/directLeeds.model');

const models = [
    directLeeds,
];


const db = {};

models.forEach((modelInit) => {
    const model = modelInit(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
});

// Object.keys(db).forEach((modelName) => {
//     if (db[modelName].associate) {
//         db[modelName].associate(db);
//     }
// });

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
