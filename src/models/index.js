module.exports = function(db) {
    const sequelize = db.sequelize;
    const Sequelize = db.Sequelize;
    
    // Define models here
    db.posts = require("./post.model")(sequelize, Sequelize);
}