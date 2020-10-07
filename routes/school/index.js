const express = require('express');
const router = express.Router();

const {getAllSchool} = require('./controller');

router.get('/school', getAllSchool);

module.exports = router;