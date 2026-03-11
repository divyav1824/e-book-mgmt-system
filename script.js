// Bar Chart: Books Read
const ctxBar = document.getElementById('barChart').getContext('2d');
new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
        datasets: [{
            label: 'Books Read',
            data: [3, 5, 2, 4, 7, 5, 4],
            backgroundColor: '#e67e22',
            borderRadius: 8,
        }]
    },
    options: {
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true, grid: { display: false } } }
    }
});

// Doughnut Chart: Genre Distribution
const ctxDoughnut = document.getElementById('doughnutChart').getContext('2d');
new Chart(ctxDoughnut, {
    type: 'doughnut',
    data: {
        labels: ['Fiction', 'Sci-Fi', 'Self-Help', 'History'],
        datasets: [{
            data: [40, 25, 20, 15],
            backgroundColor: ['#1e293b', '#3b82f6', '#10b981', '#ef4444'],
            hoverOffset: 4,
            cutout: '70%'
        }]
    },
    options: {
        plugins: {
            legend: { position: 'bottom', labels: { usePointStyle: true, padding: 20 } }
        }
    }
});