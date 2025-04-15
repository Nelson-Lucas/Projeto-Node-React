const mockPolls = require('../mocks/mockPolls'); 

const listPolls = (req, res) => {
  res.status(200).json(mockPolls);
};

const getPolls = (req, res) => {
  res.json([
    { id: 1, title: "Poll 1", description: "Description of Poll 1" },
    { id: 2, title: "Poll 2", description: "Description of Poll 2" }
  ]);
};

const createPoll = (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Title is required!' });
  }

  const newPoll = {
    id: mockPolls.length + 1,
    title,
    votes_yes: 0,
    votes_no: 0,
    open: true,
    openingDate: new Date().toISOString()
  };

  mockPolls.push(newPoll);
  res.status(201).json({ message: 'Poll created successfully!', poll: newPoll });
};

const voteYes = (req, res) => {
  const { id } = req.params;
  const poll = mockPolls.find(p => p.id == id);

  if (!poll || !poll.open) {
    return res.status(400).json({ error: 'Voting closed or poll does not exist.' });
  }

  poll.votes_yes++;
  res.status(200).json({ message: 'Vote YES registered!', poll });
};

const voteNo = (req, res) => {
  const { id } = req.params;
  const poll = mockPolls.find(p => p.id == id);

  if (!poll || !poll.open) {
    return res.status(400).json({ error: 'Voting closed or poll does not exist.' });
  }

  poll.votes_no++;
  res.status(200).json({ message: 'Vote NO registered!', poll });
};

const closePoll = (req, res) => {
  const { id } = req.params;
  const poll = mockPolls.find(p => p.id == id);

  if (!poll) {
    return res.status(400).json({ error: 'Poll does not exist.' });
  }

  poll.open = false;
  res.status(200).json({ message: 'Poll closed!', poll });
};

module.exports = { listPolls, createPoll, voteYes, voteNo, closePoll, getPolls };
