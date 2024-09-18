document.addEventListener('DOMContentLoaded', function() {
    const data = {
        "expenses": [
          {
            "category": "Aluguel",
            "total_amount": "R$2250,00",
            "comparison": "0.5% ↑",
            "items": [
              { "description": "Aluguel", "amount": "R$2100,00" },
              { "description": "Condomínio", "amount": "R$150,00" }
            ]
          },
          {
            "category": "Ingredientes",
            "total_amount": "R$500,00",
            "comparison": "0.8% ↓",
            "items": [
              { "description": "Matéria prima", "amount": "R$400,00" },
              { "description": "Material de escritório", "amount": "R$100,00" }
            ]
          },
          {
            "category": "Vale Transporte",
            "total_amount": "R$540,00",
            "comparison": "0.0% ↓",
            "items": [
              { "description": "Funcionário 02", "amount": "R$270,00" },
              { "description": "Funcionário 03", "amount": "R$270,00" }
            ]
          },
          {
            "category": "Taxa Ifood",
            "total_amount": "R$300,00",
            "comparison": "0.8% ↓",
            "items": [
              { "description": "Pedido #1234", "amount": "R$150,00" },
              { "description": "Pedido #1233", "amount": "R$150,00" }
            ]
          },
          {
            "category": "Outros Insumos",
            "total_amount": "R$300,00",
            "comparison": "0.8% ↓",
            "items": [
              { "description": "Guardanapos", "amount": "R$200,00" },
              { "description": "Uniformes", "amount": "R$100,00" }
            ]
          },
          {
            "category": "Outros",
            "total_amount": "R$900,00",
            "comparison": "0.8% ↓",
            "items": [
              { "description": "Manutenção Forno", "amount": "R$800,00" },
              { "description": "Material de escritório", "amount": "R$100,00" }
            ]
          }
        ]
      };

    const container = document.getElementById('expenses-container');
    
    data.expenses.forEach(expense => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <div class="expense-item">
                        <div class="d-flex justify-content-between">
                            <span class="expense-category">${expense.category}</span>
                            <span class="expense-amount">${expense.total_amount}</span>
                        </div>
                        <div class="text-end">
                            <small class="${expense.comparison.includes('↑') ? 'text-danger' : 'text-success'}">${expense.comparison}</small>
                            <span class="expense-comparison">Comparado ao último mês</span>
                        </div>
                    </div>
                    <div class="mt-3">
                        ${expense.items.map(item => `
                            <div class="d-flex justify-content-between mb-2">
                                <span>${item.description}</span>
                                <span>${item.amount}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
});
