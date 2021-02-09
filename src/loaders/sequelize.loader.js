const Sequelize = require("sequelize");

const config = require("../config");

const sequelize = new Sequelize(config.db.db, config.db.user, config.db.password, {
    host: config.db.host,
    dialect: config.db.dialect,
    pool: {
        max: config.db.pool.max,
        min: config.db.pool.min,
        acquire: config.db.pool.acquire,
        idle: config.db.pool.idle
    },
    logging: false
})

async function connect() {
    try {
        await sequelize.authenticate();
        //console.log('Connected to database successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    }
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

require("../models")(db);

module.exports = {db, connect};