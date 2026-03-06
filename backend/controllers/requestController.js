const BloodRequest = require('../models/BloodRequest');
const User = require('../models/User');

// @desc    Create new blood request
// @route   POST /api/requests
// @access  Private (Hospital/User)
exports.createRequest = async (req, res) => {
    try {
        const { patientName, bloodGroupNeeded, hospitalName, district, state, unitsRequired, contactNumber, urgencyLevel, message } = req.body;

        const request = await BloodRequest.create({
            userId: req.user.id,
            patientName, bloodGroupNeeded, hospitalName, district, state, unitsRequired, contactNumber, urgencyLevel, message
        });

        res.status(201).json(request);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all blood requests
// @route   GET /api/requests
// @access  Public
exports.getRequests = async (req, res) => {
    try {
        const requests = await BloodRequest.findAll({
            where: { status: 'Pending' },
            include: [{ model: User, as: 'user', attributes: ['name'] }],
            order: [['createdAt', 'DESC']]
        });
        res.json(requests);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update blood request status
// @route   PUT /api/requests/:id
// @access  Private (Hospital/Admin)
exports.updateRequestStatus = async (req, res) => {
    try {
        const request = await BloodRequest.findByPk(req.params.id);

        if (!request) return res.status(404).json({ message: 'Request not found' });

        if (req.user.id !== request.userId && req.user.role !== 'Admin') {
            return res.status(401).json({ message: 'Not authorized' });
        }

        request.status = req.body.status || request.status;
        const updatedRequest = await request.save();

        res.json(updatedRequest);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
