document.addEventListener('DOMContentLoaded', function () {
    const data = {
        "transactions": [
            {
                "type": "all",
                "items": [
                    {
                        "item": "Manutenção Forno",
                        "type": "Manutenção",
                        "date": "7 Jun, 2024",
                        "payment_method": "Cartão de Crédito",
                        "amount": "R$800,00",
                        "icon": "fas fa-home"
                    },
                    {
                        "item": "Compra materiais",
                        "type": "Insumos",
                        "date": "4 Jun, 2024",
                        "payment_method": "Cartão de Crédito",
                        "amount": "R$500,00",
                        "icon": "fas fa-shopping-cart"
                    },
                    {
                        "item": "Pedido #1234",
                        "type": "Venda - Ifood",
                        "date": "3 Jun, 2024",
                        "payment_method": "Cartão de Crédito",
                        "amount": "R$150,00",
                        "icon": "fas fa-utensils"
                    },
                    {
                        "item": "Compra embalagens",
                        "type": "Insumos",
                        "date": "3 Jun, 2024",
                        "payment_method": "Cartão de Crédito",
                        "amount": "R$250,00",
                        "icon": "fas fa-box"
                    },
                    {
                        "item": "Venda de balcão",
                        "type": "Venda - loja",
                        "date": "2 Jun, 2024",
                        "payment_method": "Cartão de Crédito",
                        "amount": "R$50,00",
                        "icon": "fas fa-store"
                    },
                    {
                        "item": "Taxa Ifood",
                        "type": "Taxa",
                        "date": "2 Jun, 2024",
                        "payment_method": "Cartão de Crédito",
                        "amount": "R$150,00",
                        "icon": "fas fa-percentage"
                    },
                    {
                        "item": "Pedido #1232",
                        "type": "Venda - Ifood",
                        "date": "2 Jun, 2024",
                        "payment_method": "Cartão de Crédito",
                        "amount": "R$88,00",
                        "icon": "fas fa-utensils"
                    }
                ]
            },
            {
                "type": "income",
                "items": [
                    {
                        "item": "Pedido #1234",
                        "type": "Venda - Ifood",
                        "date": "3 Jun, 2024",
                        "payment_method": "Cartão de Crédito",
                        "amount": "R$150,00",
                        "icon": "fas fa-utensils"
                    },
                    {
                        "item": "Venda de balcão",
                        "type": "Venda - loja",
                        "date": "2 Jun, 2024",
                        "payment_method": "Cartão de Crédito",
                        "amount": "R$50,00",
                        "icon": "fas fa-store"
                    },
                    {
                        "item": "Pedido #1232",
                        "type": "Venda - Ifood",
                        "date": "2 Jun, 2024",
                        "payment_method": "Cartão de Crédito",
                        "amount": "R$88,00",
                        "icon": "fas fa-utensils"
                    }
                ]
            },
            {
                "type": "expenses",
                "items": [
                    {
                        "item": "Compra embalagens",
                        "type": "Insumos",
                        "date": "3 Jun, 2024",
                        "payment_method": "Cartão de Crédito",
                        "amount": "R$250,00",
                        "icon": "fas fa-box"
                    },
                    {
                        "item": "Compra materiais",
                        "type": "Insumos",
                        "date": "4 Jun, 2024",
                        "payment_method": "Cartão de Crédito",
                        "amount": "R$500,00",
                        "icon": "fas fa-shopping-cart"
                    },
                    {
                        "item": "Compra embalagens",
                        "type": "Insumos",
                        "date": "3 Jun, 2024",
                        "payment_method": "Cartão de Crédito",
                        "amount": "R$250,00",
                        "icon": "fas fa-box"
                    },
                    {
                        "item": "Taxa Ifood",
                        "type": "Taxa",
                        "date": "2 Jun, 2024",
                        "payment_method": "Cartão de Crédito",
                        "amount": "R$150,00",
                        "icon": "fas fa-percentage"
                    },
                    {
                        "item": "Manutenção Forno",
                        "type": "Manutenção",
                        "date": "7 Jun, 2024",
                        "payment_method": "Cartão de Crédito",
                        "amount": "R$800,00",
                        "icon": "fas fa-home"
                    }
                ]
            }
        ]
    };

    console.log('Fetched data:', data);
    const transactions = data.transactions.reduce((acc, transactionType) => {
        acc[transactionType.type] = transactionType.items;
        return acc;
    }, {});

    const fillTable = (id, transactions) => {
        if (!Array.isArray(transactions)) {
            console.error(`Expected an array for ${id}, but got`, transactions);
            return;
        }
        const tableBody = document.querySelector(`#${id} tbody`);
        tableBody.innerHTML = transactions.map(transaction => `
            <tr>
                <td class="transaction-info"><i class="${transaction.icon} me-2"></i>${transaction.item}</td>
                <td class="transaction-details">${transaction.type}</td>
                <td class="transaction-details">${transaction.date}</td>
                <td class="transaction-details">${transaction.payment_method}</td>
                <td class="transaction-amount text-end">${transaction.amount}</td>
            </tr>
        `).join('');
    };

    fillTable('all-transactions-table', transactions['all'] || []);
    fillTable('income-transactions-table', transactions['income'] || []);
    fillTable('expenses-transactions-table', transactions['expenses'] || []);
});
