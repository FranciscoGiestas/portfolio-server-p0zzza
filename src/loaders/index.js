async function express(app) {
    await require("./express.loader").load(app);
}

async function sequelize() {
    require("./sequelize.loader");
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