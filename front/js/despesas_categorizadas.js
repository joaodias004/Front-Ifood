async function loadExpenseCategories() {
    try {
        const response = await fetch('/assets/despesas_categorizadas.json');
        const data = await response.json();
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
        console.error('Error loading expense categories:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadExpenseCategories);
