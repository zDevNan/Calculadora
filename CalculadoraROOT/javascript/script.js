// Função para mostrar a mensagem de boas-vindas no menu
function enviarDados() {
    let nomeDigitado = document.getElementById("nome").value;
    if (nomeDigitado.length > 0) {
        alert("Boa noite " + nomeDigitado);
        let areaNome = document.getElementById("nome-digitado");
        areaNome.innerHTML = nomeDigitado;
        document.getElementById("area-texto").style.display = "block";
    } else {
        document.getElementById("nome").style.border = "1px solid red";
    }
}

// Inicialização da variável global para a operação atual
let currentOperation = '';
let history = []; // Array para armazenar o histórico de resultados

// Função para selecionar a operação na calculadora
function selectOperation(operation) {
    currentOperation = operation;
    document.getElementById('form-group').style.display = 'block';
    document.getElementById('result').style.display = 'none';
}

// Função para validar o input do valor
function validateInput() {
    const valor = document.getElementById('valor').value;
    if (isNaN(valor) || valor.trim() === '') {
        document.getElementById('valor').style.border = '1px solid red';
    } else {
        document.getElementById('valor').style.border = '';
    }
}

// Função para mostrar o resultado da operação e adicionar ao histórico
function showResult() {
    const valor = parseFloat(document.getElementById('valor').value.replace(",", "."));
    const resultadoField = document.getElementById('resultado');
    
    if (isNaN(valor)) {
        alert("Por favor, insira um valor válido.");
        return;
    }
    
    let resultado;
    let segundoValor;
    switch (currentOperation) {
        case 'dobro':
            resultado = valor * 2;
            break;
        case 'soma':
            segundoValor = parseFloat(prompt("Digite o segundo valor:").replace(",", "."));
            if (!isNaN(segundoValor)) {
                resultado = valor + segundoValor;
            } else {
                alert("Digite um número válido para o segundo valor!");
                return;
            }
            break;
        case 'subtracao':
            segundoValor = parseFloat(prompt("Digite o segundo valor:").replace(",", "."));
            if (!isNaN(segundoValor)) {
                resultado = valor - segundoValor;
            } else {
                alert("Digite um número válido para o segundo valor!");
                return;
            }
            break;
        case 'multiplicacao':
            segundoValor = parseFloat(prompt("Digite o segundo valor:").replace(",", "."));
            if (!isNaN(segundoValor)) {
                resultado = valor * segundoValor;
            } else {
                alert("Digite um número válido para o segundo valor!");
                return;
            }
            break;
        case 'divisao':
            segundoValor = parseFloat(prompt("Digite o segundo valor:").replace(",", "."));
            if (!isNaN(segundoValor) && segundoValor !== 0) {
                resultado = valor / segundoValor;
            } else {
                alert("Digite um número válido e diferente de zero para o segundo valor!");
                return;
            }
            break;
        case 'potencia':
            segundoValor = parseFloat(prompt("Digite o expoente:").replace(",", "."));
            if (!isNaN(segundoValor)) {
                resultado = Math.pow(valor, segundoValor);
            } else {
                alert("Digite um número válido para o expoente!");
                return;
            }
            break;
        default:
            resultado = 'Operação não definida';
    }
    
    // Adicionar ao histórico
    history.push(`${currentOperation.charAt(0).toUpperCase() + currentOperation.slice(1)}: ${resultado}`);
    updateHistory();
    
    // Mostrar resultado em alerta e reiniciar o cálculo
    alert(`O resultado é: ${resultado}`);
    document.getElementById('valor').value = '';
    document.getElementById('resultado').value = '';
    document.getElementById('form-group').style.display = 'block';
    document.getElementById('result').style.display = 'none';
}

// Função para atualizar a área de histórico com os resultados
function updateHistory() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = ''; // Limpa a lista atual

    history.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = entry;
        historyList.appendChild(li);
    });
}

// Função para resetar a calculadora
function resetCalculator() {
    document.getElementById('valor').value = '';
    document.getElementById('resultado').value = '';
    document.getElementById('form-group').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    // Não limpa o histórico
}

// Função para voltar à página principal
function goBack() {
    window.location.href = 'main.html';
}
