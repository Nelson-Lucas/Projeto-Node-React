import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const validateCPF = async (cpf) => {
  console.log("🔎 Chamando API:", `http://localhost:3000/users/validate/${cpf}`);

  try {
    const response = await fetch(`http://localhost:3000/users/validate/${cpf}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("❌ Erro ao validar CPF:", error);
    throw error;
  }
};

export default api;
