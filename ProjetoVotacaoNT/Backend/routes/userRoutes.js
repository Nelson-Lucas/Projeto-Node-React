const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.get('/validate/:cpf', UserController.validateCPF);
router.post('/register', UserController.registerUser);

module.exports = router;
