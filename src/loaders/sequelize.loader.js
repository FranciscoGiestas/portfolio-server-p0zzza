'use strict';

const { Sequelize } = require("sequelize");

const config = require("../config");

const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

const db = {};

let sequelize;

sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
    host: config.development.host,
    dialect: config.development.dialect,
    pool: {
        max: config.development.pool.max,
        min: config.development.pool.min,
        acquire: config.development.pool.acquire,
        idle: config.development.pool.idle
    },
    logging: false
});

fs
.readdirSync(__dirname + "/../models")
.filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
})
.forEach(file => {
    const model = require(path.join('../models/', file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;