var ctx2 = document.getElementById('faturamentoPorHora').getContext('2d');
new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['08h', '09h', '10h', '11h', '12h', '13h', '14h'],
        datasets: [{
            label: 'Faturamento por Hora',
            data: [50, 75, 100, 125, 150, 200, 250],
            backgroundColor: '#A52A2A',
            borderColor: '#A52A2A', 
            borderWidth: 1 
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    display: false 
                }
            },
            y: {
                beginAtZero: true,
                max: 300,
                stepSize: 100,
                grid: {
                    color: '#E9ECEF' 
                }
            }
        }
    }
});