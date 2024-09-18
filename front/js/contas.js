document.addEventListener('DOMContentLoaded', () => {
    fetch('/assets/contas.json')
        .then(response => response.json())
        .then(data => {
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
        })
        .catch(error => console.error('Error loading the JSON data:', error));
});
