const db = require('../config/database');

db.run(`
  CREATE TABLE IF NOT EXISTS polls (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    votes_yes INTEGER DEFAULT 0,
    votes_no INTEGER DEFAULT 0,
    open INTEGER DEFAULT 1,
    openingDate TEXT DEFAULT (datetime('now'))
  )
`);

const PollModel = {
  getAllPolls: (callback) => {
    db.all(`SELECT * FROM polls`, callback);
  },

  insertPoll: (title, callback) => {
    db.run(`INSERT INTO polls (title, openingDate) VALUES (?, datetime('now'))`, [title], callback);
  },

  voteYes: (id, callback) => {
    db.run(`UPDATE polls SET votes_yes = votes_yes + 1 WHERE id = ?`, [id], callback);
  },

  voteNo: (id, callback) => {
    db.run(`UPDATE polls SET votes_no = votes_no + 1 WHERE id = ?`, [id], callback);
  },

  closePoll: (id, callback) => {
    db.run(`UPDATE polls SET open = 0 WHERE id = ?`, [id], callback);
  },

  getPollById: (id, callback) => {
    db.get(`SELECT * FROM polls WHERE id = ?`, [id], callback);
  }
};

module.exports = PollModel;
