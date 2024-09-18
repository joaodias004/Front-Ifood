const ctxSales = document.getElementById('salesMethodChart').getContext('2d');
const salesMethodChart = new Chart(ctxSales, {
    type: 'doughnut',
    data: {
        labels: ['Delivery', 'Local'],
        datasets: [{
            label: 'Método de venda',
            data: [85, 15],
            backgroundColor: ['#A52A2A', '#E8E8E8'],
            borderWidth: 3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'left'
            }
        }
    }
});