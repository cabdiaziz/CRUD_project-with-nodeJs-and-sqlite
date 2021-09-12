const {Sequelize,DataTypes} = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('User',{

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
        // defaultValue: Sequelize.UUIDV4,  // or Sequelize.UUIDV1
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    
},
{
    tableName: 'User',
    timestamps: false
});

module.exports = User;