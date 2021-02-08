module.exports = {
    HOST: "localhost",
    USER: "portfoliodb_user",
    PASSWORD: "ChesterfieldMent@",
    DB: "portfoliodb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };