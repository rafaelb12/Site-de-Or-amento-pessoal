var header = document.querySelector("header");
var scrollPoint = 400;

window.addEventListener("scroll", function() {
    if (window.scrollY > scrollPoint) {
        header.style.backgroundColor = "#18196f"; 
    } else {
        header.style.backgroundColor = "#006DA4";
    }
});

const menuToggle = document.getElementById("menu-toggle");
const containerNav = document.querySelector(".container-nav");

menuToggle.addEventListener("click", function() {
    containerNav.classList.toggle("show");
});

function calcular() {
    const renda = document.getElementById("renda-mensal").value;
    const despesasFixas = document.getElementById("despesas-fixas").value;
    const despesasVariaveis = document.getElementById("despesas-variáveis").value;
  
    const saldo = renda - despesasFixas - despesasVariaveis;
  
    document.getElementById("saldo").textContent = saldo;
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", calcular);
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("expenseForm").reset(); // Limpa o formulário ao carregar a página
});

function addExpense() {
    const description = document.getElementById("description").value;
    const amount = document.getElementById("amount").value;

    if (description && amount) {
        const listItem = document.createElement("li");
        listItem.textContent = `${description}: R$ ${amount}`;
        
        document.getElementById("expenseList").appendChild(listItem);
        document.getElementById("expenseForm").reset(); // Limpa o formulário após adicionar a despesa
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("budgetForm").reset(); // Limpa o formulário ao carregar a página
});

function calculateBudget() {
    const salary = parseFloat(document.getElementById("salary").value);
    const emergencyFundPercentage = parseFloat(document.getElementById("emergencyFund").value);
    const description = document.getElementById("description").value;
    const amount = parseFloat(document.getElementById("amount").value);

    if (isNaN(salary) || isNaN(emergencyFundPercentage) || isNaN(amount) || salary <= 0 || emergencyFundPercentage < 0 || amount <= 0) {
        alert("Por favor, insira valores válidos em todos os campos.");
        return;
    }

    const emergencyFundAmount = (emergencyFundPercentage / 100) * salary;
    const remainingBudget = salary - amount - emergencyFundAmount;

    const resultMessage = `
        <h2>Orçamento Pessoal</h2>
        <p>Salário Mensal: R$ ${salary}</p>
        <p>Reserva de Emergência (${emergencyFundPercentage}%): R$ ${emergencyFundAmount.toFixed(2)}</p>
        <p>Despesa (${description}): R$ ${amount}</p>
        <p>Orçamento Restante: R$ ${remainingBudget.toFixed(2)}</p>
    `;

    document.getElementById("budgetResult").innerHTML = resultMessage;
}

  function calcularSalarioLiquido() {
    var salarioBruto = parseFloat(document.getElementById('salarioBruto').value);
    var descontos = parseFloat(document.getElementById('descontos').value);

    if (isNaN(salarioBruto) || isNaN(descontos)) {
        alert('Por favor, digite valores válidos.');
        return;
    }

    var baseINSS = salarioBruto;
    var aliquotaINSS = 0.11; // Exemplo de alíquota de INSS
    var descontoINSS = baseINSS * aliquotaINSS;

    var baseIRRF = salarioBruto - descontoINSS;
    var aliquotaIRRF = 0.15; // Exemplo de alíquota de IRRF
    var descontoIRRF = baseIRRF * aliquotaIRRF;

    var salarioLiquido = salarioBruto - descontoINSS - descontoIRRF;

    // Preencher os resultados na tabela
    document.getElementById('aliquotaBase').textContent = '';
    document.getElementById('proventosBase').textContent = salarioBruto.toFixed(2);
    document.getElementById('descontosBase').textContent = descontoINSS.toFixed(2);

    document.getElementById('aliquotaEfetiva').textContent = (aliquotaINSS * 100).toFixed(2) + '%';
    document.getElementById('proventosEfetiva').textContent = '';
    document.getElementById('descontosEfetiva').textContent = descontoIRRF.toFixed(2);

    document.getElementById('totalProventos').textContent = salarioBruto.toFixed(2);
    document.getElementById('totalDescontos').textContent = (descontoINSS + descontoIRRF).toFixed(2);

    document.getElementById('salarioLiquido').textContent = salarioLiquido.toFixed(2);
}

function calcularSalarioLiquido() {
    var salarioBruto = parseFloat(document.getElementById('salarioBruto').value);
    var descontos = parseFloat(document.getElementById('descontos').value);
    var dependentes = parseInt(document.getElementById('dependentes').value);

    if (isNaN(salarioBruto) || isNaN(descontos) || isNaN(dependentes)) {
        alert('Por favor, digite valores válidos.');
        return;
    }

    // Calcula desconto por dependente (exemplo: R$ 100,00 por dependente)
    var descontoDependente = 100.00 * dependentes;

    var baseINSS = salarioBruto;
    var aliquotaINSS = 0.11; // Exemplo de alíquota de INSS
    var descontoINSS = baseINSS * aliquotaINSS;

    var baseIRRF = salarioBruto - descontoINSS - descontoDependente;
    var aliquotaIRRF = 0.15; // Exemplo de alíquota de IRRF
    var descontoIRRF = baseIRRF * aliquotaIRRF;

    var salarioLiquido = salarioBruto - descontoINSS - descontoIRRF - descontoDependente;

    // Preencher os resultados na tabela
    document.getElementById('aliquotaBase').textContent = '';
    document.getElementById('proventosBase').textContent = salarioBruto.toFixed(2);
    document.getElementById('descontosBase').textContent = (descontoINSS + descontoDependente).toFixed(2);

    document.getElementById('aliquotaEfetiva').textContent = (aliquotaINSS * 100).toFixed(2) + '%';
    document.getElementById('proventosEfetiva').textContent = '';
    document.getElementById('descontosEfetiva').textContent = (descontoIRRF + descontoDependente).toFixed(2);

    document.getElementById('totalProventos').textContent = salarioBruto.toFixed(2);
    document.getElementById('totalDescontos').textContent = (descontoINSS + descontoIRRF + descontoDependente).toFixed(2);

    document.getElementById('salarioLiquido').textContent = salarioLiquido.toFixed(2);
}