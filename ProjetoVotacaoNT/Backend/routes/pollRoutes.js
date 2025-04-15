const express = require('express');
const PollController = require('../controllers/PollController');

const router = express.Router();

router.post('/create', PollController.createPoll);
router.get('/list', PollController.listPolls);
router.post('/:id/voteYes', PollController.voteYes);
router.post('/:id/voteNo', PollController.voteNo);
router.post('/:id/close', PollController.closePoll);
router.get('/polls', PollController.getPolls);

module.exports = router;
