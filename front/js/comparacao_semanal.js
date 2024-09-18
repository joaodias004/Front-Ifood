document.addEventListener('DOMContentLoaded', function() {
    const labels = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];
    const data = {
        labels: labels,
        datasets: [{
            label: 'Comparação Semanal',
            data: [1200, 1500, 1800, 2000],
            backgroundColor: 'rgba(165, 42, 42, 0.2)',
            borderColor: '#A52A2A', 
            borderWidth: 2,
            pointBackgroundColor: '#A52A2A',
            pointBorderColor: '#fff', 
            pointBorderWidth: 2,
            pointRadius: 5,
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            maintainAspectRatio: false,
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)',
                        borderColor: '#ddd' 
                    },
                    ticks: {
                        font: {
                            size: 14, 
                            color: '#212529'
                        }
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)' 
                    },
                    ticks: {
                        font: {
                            size: 14, 
                            color: '#212529' 
                        },
                        callback: function(value) {
                            return `R$${value}`;
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#212529',
                        font: {
                            size: 14 
                        }
                    }
                },
                tooltip: {
                    backgroundColor: '#333',
                    titleColor: '#fff', 
                    bodyColor: '#fff',
                    callbacks: {
                        label: function(tooltipItem) {
                            return `${tooltipItem.label}: R$${tooltipItem.raw}`;
                        }
                    }
                }
            }
        }
    };

    const ctx = document.getElementById('weeklyComparisonChart').getContext('2d');
    new Chart(ctx, config);
});
