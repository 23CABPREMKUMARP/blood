const { Op } = require('sequelize');
const Donor = require('../models/Donor');
const User = require('../models/User');

// @desc    Get all donors or search and filter
// @route   GET /api/donors
// @access  Public
exports.getDonors = async (req, res) => {
    try {
        const { bloodGroup, district, city, state } = req.query;
        let whereClause = { availabilityStatus: true };

        if (bloodGroup) whereClause.bloodGroup = bloodGroup;
        if (district) whereClause.district = { [Op.like]: `%${district}%` };
        if (city) whereClause.address = { [Op.like]: `%${city}%` };
        if (state) whereClause.state = { [Op.like]: `%${state}%` };

        const donors = await Donor.findAll({
            where: whereClause,
            include: [{ model: User, as: 'user', attributes: ['name', 'email', 'phone'] }]
        });
        res.json(donors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update donor profile
// @route   PUT /api/donors/profile
// @access  Private
exports.updateDonorProfile = async (req, res) => {
    try {
        const donor = await Donor.findOne({ where: { userId: req.user.id } });

        if (!donor) return res.status(404).json({ message: 'Donor profile not found' });

        donor.availabilityStatus = req.body.availabilityStatus !== undefined ? req.body.availabilityStatus : donor.availabilityStatus;
        donor.lastDonationDate = req.body.lastDonationDate || donor.lastDonationDate;
        donor.address = req.body.address || donor.address;
        donor.district = req.body.district || donor.district;
        donor.state = req.body.state || donor.state;

        const updatedDonor = await donor.save();
        res.json(updatedDonor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
