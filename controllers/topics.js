const Topic = require('../models/topic');

exports.getTopics = (req, res, next) => {
  Topic.find()
    .then((topics) => {
      res.render('dashboard', {
        pageTitle: 'Dashboard',
        topics: topics,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.addTopic = (req, res, next) => {
  res.render('addTopic', {
    pageTitle: 'Add Topic',
  });
};

exports.postAddTopic = (req, res, next) => {
  const topicName = req.body.topicName;
  const description = req.body.description;
  const categories = req.body.categories;
  switch (categories) {
    case 'UNDERSTOOD':
      percentage = 100;
      break;
    case 'SOMEWHAT UNDERSTOOD':
      percentage = 75;
      break;
    case 'NOT CLEAR':
      percentage = 50;
      break;
    case 'WHAT RUBBISH':
      percentage = 25;
      break;

    default:
      break;
  }
  const project = new Topic({
    topicName: topicName,
    description: description,
    categories:categories,
    percentage: percentage,
  });
  project
    .save()
    .then(() => {
      res.redirect('/dashboard');
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getTopic = (req, res, next) => {
  const projId = req.params.topicId;
  Topic.findById(projId)
    .then((topic) => {
      res.render('topicDetail', {
        pageTitle: 'Topic Detail',
        topic: topic,
      });
    })
    .catch((err) => console.log(err));
};
