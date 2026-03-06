const express = require('express');
const router = express.Router();
const { getDonors, updateDonorProfile } = require('../controllers/donorController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(getDonors);
router.route('/profile').put(protect, updateDonorProfile);

module.exports = router;
