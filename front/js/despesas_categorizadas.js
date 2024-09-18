document.addEventListener('DOMContentLoaded', () => {
    const data = {
        "expense_categories": [
            {
                "category": "Aluguel e Afins",
                "amount": "R$2250,00"
            },
            {
                "category": "Ingredientes",
                "amount": "R$500,00"
            },
            {
                "category": "Transporte",
                "amount": "R$450,00"
            },
            {
                "category": "Contas de Energia",
                "amount": "R$120,00"
            },
            {
                "category": "Internet",
                "amount": "R$80,00"
            },
            {
                "category": "Telefone",
                "amount": "R$60,00"
            },
            {
                "category": "Medicação",
                "amount": "R$150,00"
            },
            {
                "category": "Lazer",
                "amount": "R$200,00"
            },
            {
                "category": "Educação",
                "amount": "R$300,00"
            },
            {
                "category": "Seguros",
                "amount": "R$180,00"
            },
            {
                "category": "Impostos",
                "amount": "R$250,00"
            },
            {
                "category": "Manutenção do Carro",
                "amount": "R$350,00"
            },
            {
                "category": "Gastos com Pets",
                "amount": "R$100,00"
            },
            {
                "category": "Assinaturas",
                "amount": "R$90,00"
            },
            {
                "category": "Doações",
                "amount": "R$75,00"
            }
        ]
    };
    

    loadExpenseCategories(data);
});

function loadExpenseCategories(data) {
    try {
        const categories = data.expense_categories.slice(0, 6);
        const container = document.getElementById('expenseCategories');

        categories.forEach(category => {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'col-md-4 mb-3';

            const cardDiv = document.createElement('div');
            cardDiv.className = 'expense-card';

            const cardBodyDiv = document.createElement('div');
            cardBodyDiv.className = 'd-flex justify-content-between align-items-center';

            const infoDiv = document.createElement('div');

            const icon = document.createElement('i');
            icon.className = `fas fa-${category.icon} expense-icon`;
            infoDiv.appendChild(icon);

            const span = document.createElement('span');
            span.textContent = category.category;
            infoDiv.appendChild(span);

            const amount = document.createElement('h4');
            amount.textContent = category.amount;

            cardBodyDiv.appendChild(infoDiv);
            cardBodyDiv.appendChild(amount);

            const button = document.createElement('button');
            button.className = 'btn btn-outline-primary adjust-btn mt-2';
            button.textContent = 'Ajustar';

            cardDiv.appendChild(cardBodyDiv);
            cardDiv.appendChild(button);

            categoryDiv.appendChild(cardDiv);
            container.appendChild(categoryDiv);
        });
    } catch (error) {
        console.error('Erro ao carregar categorias de despesas:', error);
    }
}
