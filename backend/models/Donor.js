const { sequelize, DataTypes } = require('../config/db');
const User = require('./User');

const Donor = sequelize.define('Donor', {
    name: { type: DataTypes.STRING, allowNull: false },
    age: { type: DataTypes.INTEGER },
    bloodGroup: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING },
    district: { type: DataTypes.STRING, allowNull: false },
    state: { type: DataTypes.STRING, allowNull: false },
    lastDonationDate: { type: DataTypes.DATE },
    availabilityStatus: { type: DataTypes.BOOLEAN, defaultValue: true }
});

User.hasOne(Donor, { foreignKey: 'userId', as: 'donorProfile' });
Donor.belongsTo(User, { foreignKey: 'userId', as: 'user' });

module.exports = Donor;
