const express = require('express');

const { getAllDirectLeads,
        convertExcelToJSON
} = require('../controllers/leadController');

const router = express.Router();

router.get('/' , getAllDirectLeads);
router.post('/get-bulk-leads' , convertExcelToJSON);

module.exports = router;
