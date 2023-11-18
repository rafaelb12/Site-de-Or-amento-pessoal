document.addEventListener('DOMContentLoaded', function () {
    const incomeInput = document.getElementById('income');
    const expenseNameInput = document.getElementById('expenseName');
    const expensesInput = document.getElementById('expenses');
    const addExpenseButton = document.getElementById('addExpense');
    const expenseList = document.getElementById('expenseList');
    const updateButton = document.getElementById('updateButton');
    const financeChart = document.getElementById('financeChart');
    const situacaoFinanceira = document.getElementById('situacaoFinanceira');
    const ctx = financeChart.getContext('2d');

    let expensesData = [];

    addExpenseButton.addEventListener('click', function () {
      const expenseName = expenseNameInput.value.trim();
      const expenseValue = parseFloat(expensesInput.value) || 0;

      if (expenseValue > 0 && expenseName !== '') {
        expensesData.push({ name: expenseName, value: expenseValue });

        // Adicionar a despesa à lista
        const expenseItem = document.createElement('div');
        expenseItem.textContent = `Despesa: ${expenseName} - R$ ${expenseValue}`;
        expenseList.appendChild(expenseItem);

        // Limpar os campos de despesa
        expenseNameInput.value = '';
        expensesInput.value = '';
      }
    });

    updateButton.addEventListener('click', function () {
      const income = parseFloat(incomeInput.value) || 0;

      // Calcular o total de despesas
      const totalExpenses = expensesData.reduce((acc, expense) => acc + expense.value, 0);

      const total = income - totalExpenses;

      // Limpar o gráfico anterior
      ctx.clearRect(0, 0, financeChart.width, financeChart.height);

      // Definir a posição inicial para as barras
      let xPos = 20;
      const barWidth = 30;

      expensesData.forEach((expense, index) => {
        const barHeight = (expense.value / totalExpenses) * (financeChart.height - 30);
        const barColor = getRandomColor();

        // Desenhar a barra
        ctx.fillStyle = barColor;
        ctx.fillRect(xPos, financeChart.height - barHeight - 10, barWidth, barHeight);

        // Adicionar informações da despesa ao gráfico
        ctx.fillStyle = '#000';
        ctx.textAlign = 'center';
        ctx.fillText(`${expense.name} - R$ ${expense.value}`, xPos + barWidth / 2, financeChart.height - barHeight - 15);

        // Atualizar a posição para a próxima barra
        xPos += barWidth + 10;
      });

      // Atualizar a seção de situação financeira
      situacaoFinanceira.textContent = `Situação Financeira: ${total >= 0 ? 'Superavitária' : 'Deficitária'}. Saldo: R$ ${total}`;
    });

    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  });