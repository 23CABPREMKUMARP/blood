const { sequelize, DataTypes } = require('../config/db');
const User = require('./User');

const BloodRequest = sequelize.define('BloodRequest', {
    patientName: { type: DataTypes.STRING, allowNull: false },
    bloodGroupNeeded: { type: DataTypes.STRING, allowNull: false },
    hospitalName: { type: DataTypes.STRING, allowNull: false },
    district: { type: DataTypes.STRING, allowNull: false },
    state: { type: DataTypes.STRING },
    unitsRequired: { type: DataTypes.INTEGER, allowNull: false },
    contactNumber: { type: DataTypes.STRING, allowNull: false },
    urgencyLevel: { type: DataTypes.ENUM('Normal', 'High', 'Critical'), defaultValue: 'High' },
    message: { type: DataTypes.TEXT },
    status: { type: DataTypes.ENUM('Pending', 'Fulfilled'), defaultValue: 'Pending' }
});

BloodRequest.belongsTo(User, { foreignKey: 'userId', as: 'user' });
User.hasMany(BloodRequest, { foreignKey: 'userId', as: 'requests' });

module.exports = BloodRequest;
