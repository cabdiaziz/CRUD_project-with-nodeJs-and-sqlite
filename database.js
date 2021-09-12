const Sequelize = require('sequelize');

//Creating to database.
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/loginDB.sqlite'   //stores the db into our machine.
                                  // their is other ways to store the db into memory.
});

module.exports = sequelize; // we export the instance variable.