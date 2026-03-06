const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: false
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('SQLite Database Connected.');
        await sequelize.sync({ alter: true }); // updates tables without losing data
        console.log('Database synced with alter: true.');
    } catch (error) {
        console.error('Unable to connect to database:', error);
    }
};

module.exports = { sequelize, connectDB, DataTypes };
