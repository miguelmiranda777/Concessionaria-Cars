function adicionarCarrinho(carro) {
    alert(carro + " foi adicionado ao carrinho!");
  
}

function cadastro() {
    let nome = prompt("Digite seu nome:");
    let email = prompt("Digite seu e-mail:");

    if (nome && email) {
        alert("Cadastro realizado com sucesso!");
        
        alert("Cadastro falhou. Por favor, preencha todos os campos.");
    }
}

