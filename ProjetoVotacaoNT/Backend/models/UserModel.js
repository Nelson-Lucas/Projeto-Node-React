const db = require('../config/database');

db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    cpf TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    eligible INTEGER DEFAULT 0
  )
`);

const UserModel = {
  validateCPF: (cpf, callback) => {
    db.get(`SELECT eligible FROM users WHERE cpf = ?`, [cpf], callback);
  },

  registerUser: (cpf, name, eligible, callback) => {
    db.run(`INSERT INTO users (cpf, name, eligible) VALUES (?, ?, ?)`, [cpf, name, eligible], callback);
  }
};

module.exports = UserModel;
