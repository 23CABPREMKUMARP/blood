const express = require('express');
const router = express.Router();
const { createRequest, getRequests, updateRequestStatus } = require('../controllers/requestController');
const { protect, hospital } = require('../middleware/authMiddleware');

router.route('/')
    .post(protect, createRequest)
    .get(getRequests);

router.route('/:id').put(protect, hospital, updateRequestStatus);

module.exports = router;
