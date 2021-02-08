async function express (app) {
    await require("./express.loader")(app);
}

async function sequelize() {
    const sequelize = require("./sequelize.loader");
    await sequelize.connect();
}

async function load(app) {
    express(app).then(() => console.log('-> Express loaded'));
    sequelize().then(() => console.log('-> Sequelize loaded'));
}

module.exports = {load};