document.addEventListener('DOMContentLoaded', () => {
    const data = {
        "monthly_expenses": {
            "label": [
                "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro", 
                "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho"
            ],
            "data": [1900, 2000, 1700, 1600, 1800, 1200, 1500, 1700, 1300, 1600, 1800, 1400]
        }
    };

    const labels = data.monthly_expenses.label;
    const expensesData = data.monthly_expenses.data;

    const ctx = document.getElementById('spendingChart').getContext('2d');

    const spendingChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Gasto mensal',
                data: expensesData, 
                backgroundColor: '#A52A2A',
                borderColor: '#212529',
                borderWidth: 2
            }]
        },
        options: {
            maintainAspectRatio: false, 
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });
});
