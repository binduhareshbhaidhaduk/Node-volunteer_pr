const express = require('express');
const controllers = require('../controllers/myController');

const router = express.Router();

router.get('/', controllers.defaultCon);
router.get('/createForm', controllers.createVolunteerCon);
router.post('/addVolunteer', controllers.addVolunteerCon);
router.get('/singleVolunteer/:id', controllers.singleVolunteerCon);
router.post('/updateVolunteer/:id', controllers.updateVolunteerCon);
router.get('/deleteVolunteer/:id', controllers.deleteVolunteerCon);

module.exports = router;
