async function express(app) {
    await require("./express.loader")(app);
}

async function sequelize() {
    const sequelize = require("./sequelize.loader");
    await sequelize.connect();
}

async function load(app) {
    await express(app)
     .then( () => {
        console.log('-> Express loaded')
        return sequelize()
     })
     .then( () => {
        console.log('-> Sequelize loaded')
     })
}

module.exports = {load};