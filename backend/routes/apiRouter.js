var express = require('express');
var router = express.Router();

var read_controller = require('../controllers/readController');
var write_controller = require('../controllers/writeController');

//read Routes

//GET List of all events
router.get('/', read_controller.list_event);

//GET Find event by Id
router.get('/:id', read_controller.find_event_by_id);

//POST create Event
router.post('/create', write_controller.create_event);

//POST Update Event
router.post('/update/:id', write_controller.update_event);

//POST Delete Event
router.post('/delete/:id', write_controller.delete_event); 

module.exports = router;