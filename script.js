// Sample data for the charts with different colors for each day
const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
        label: 'Stat',
        data: [1200, 1100, 1000, 900, 800, 700, 600],
        backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 87, 34, 0.2)'
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 87, 34, 1)'
        ],
        borderWidth: 1
    }]
};

// Function to create charts
function createChart(elementId, chartType) {
    return new Chart(document.getElementById(elementId), {
        type: chartType,
        data: chartData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Create charts for each stat
const followersChart = createChart('followersChart', 'bar');
const likesChart = createChart('likesChart', 'line');
const retweetsChart = createChart('retweetsChart', 'pie');
const impressionsChart = createChart('impressionsChart', 'doughnut');

// Additional charts
const dataSet1Chart = createChart('dataSet1Chart', 'bar');
const dataSet2Chart = createChart('dataSet2Chart', 'line');
const dataSet3Chart = createChart('dataSet3Chart', 'pie');
const dataSet4Chart = createChart('dataSet4Chart', 'doughnut');
