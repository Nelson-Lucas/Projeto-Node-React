function validateCPF() {
    fetch('http://localhost:3000/users/validate/12345678901')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error("Erro ao buscar API:", error));
}
