document.addEventListener('DOMContentLoaded', () => {
    const data = {
        "transactions": [
            {
                "vencimento": {
                    "month": "Junho",
                    "day": "18"
                },
                "descricao": {
                    "title": "Luz - Mensal",
                    "detail": "Conta de luz"
                },
                "ultima_cobranca": "14 de Maio, 2024",
                "quantia": "R$150"
            },
            {
                "vencimento": {
                    "month": "Junho",
                    "day": "18"
                },
                "descricao": {
                    "title": "Aluguel - Mensal",
                    "detail": "Aluguel do espaço"
                },
                "ultima_cobranca": "15 de Maio, 2024",
                "quantia": "R$150"
            }
        ]
    };

    const tbody = document.getElementById('transaction-table-body');
    data.transactions.forEach(transaction => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td class="transaction-info">
                <div class="fw-bold">${transaction.vencimento.month}</div>
                <div class="fs-4">${transaction.vencimento.day}</div>
            </td>
            <td class="transaction-details">
                <div class="fw-bold">${transaction.descricao.title}</div>
                <div class="text-muted">${transaction.descricao.detail}</div>
            </td>
            <td class="transaction-details">${transaction.ultima_cobranca}</td>
            <td class="transaction-amount text-end">${transaction.quantia}</td>
        `;

        tbody.appendChild(row);
    });
});
