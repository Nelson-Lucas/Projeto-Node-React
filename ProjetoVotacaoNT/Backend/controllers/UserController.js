const db = require('../config/database');
const mockUsers = require('../mocks/mockUsers'); 

const validateCPF = (req, res) => {
  const { cpf } = req.params;
  const mockUser = mockUsers.find(user => user.cpf === cpf);

  if (!mockUser) {
    return res.status(404).json({
      erro: 'Usuário não encontrado.',
      debugInfo: { cpfRecebido: cpf, origem: 'Mock' }
    });
  }

  res.status(200).json({
    mensagem: mockUser.apto ? 'Usuário apto a votar!' : 'Usuário não pode votar.',
    usuario: mockUser,
    debugInfo: { cpfRecebido: cpf, usuarioEncontradoNoMock: mockUser }
  });
};

  const registerUser = (req, res) => {
    const { nome, cpf, apto } = req.body;
  
    if (!nome || !cpf || apto === undefined) {
      return res.status(400).json({ erro: 'Nome, CPF e status de aptidão são obrigatórios.' });
    }
  
    const newMockUser = { id: mockUsers.length + 1, nome, cpf, apto };
    mockUsers.push(newMockUser);
  
    db.run(`INSERT INTO users (cpf, name, eligible) VALUES (?, ?, ?)`, [cpf, nome, apto], (err) => {
      if (err) {
        return res.status(500).json({ erro: 'Erro ao registrar usuário no banco.' });
      }
      res.status(201).json({ mensagem: 'Usuário registrado com sucesso!', usuario: newMockUser });
    });
  };
  

  module.exports = { validateCPF, registerUser };

