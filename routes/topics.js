const express = require('express');
const router = express.Router();

const topics = require('../controllers/topics');

// GET request
router.get('/dashboard', topics.getTopics);
router.get('/add', topics.addTopic);
router.get('/:topicId', topics.getTopic);

router.post('/addTopic', topics.postAddTopic);

module.exports = router;
