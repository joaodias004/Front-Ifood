document.addEventListener('DOMContentLoaded', function() {
    var totalGoal = 20000;
    var achievedValue = 12500;
    var remainingValue = totalGoal - achievedValue;
    var date = window.currentFormattedDate || "Mês, Ano";
    
    document.getElementById('totalValue').innerText = `R$${totalGoal.toLocaleString()}`;
    document.getElementById('date').innerText = date;
    document.getElementById('achievedValue').innerText = `Valor atingido: R$${achievedValue.toLocaleString()}`;
    document.getElementById('goalValue').innerText = `Objetivo: R$${totalGoal.toLocaleString()}`;

    var ctx1 = document.getElementById('metasTabela').getContext('2d');
    new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: ['Alcançado', 'Restante'],
            datasets: [{
                data: [achievedValue, remainingValue],
                backgroundColor: ['#A52A2A', '#E8E8E8']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
});
