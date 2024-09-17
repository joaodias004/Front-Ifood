fetch('/assets/despesas_mensais.json')
        .then(response => response.json())
        .then(data => {
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
        })
        .catch(error => {
            console.error('Error loading the JSON data:', error);
        });