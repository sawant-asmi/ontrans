<html>
<head>
    <title>Real-Time Chart</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
    <canvas id="realTimeChart" width="800" height="400"></canvas>
    <script src="your_script.js"></script>
</body>
</html>




//js code


const ctx = document.getElementById('realTimeChart').getContext('2d');

// Initialize an empty Chart.js chart
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [], // Array to hold timestamps or labels
        datasets: [{
            label: 'Real-Time Data',
            data: [], // Array to hold data points
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
            // Add more dataset configurations if needed
        }]
    },
    options: {
        // Chart options and configurations
    }
});

// Function to fetch data from the backend API
function fetchDataAndUpdateChart() {
    fetch('your_backend_api_url')
        .then(response => response.json())
        .then(data => {
            updateChart(data); // Update the chart with fetched data
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Function to update the Chart.js chart with new data
function updateChart(newData) {
    // Assuming newData is an array of data points with { label, value }
    newData.forEach(point => {
        myChart.data.labels.push(point.label); // Add label or timestamp
        myChart.data.datasets[0].data.push(point.value); // Add data value
    });
    myChart.update(); // Update the chart
}

// Fetch data from the backend every X seconds (e.g., every 5 seconds)
setInterval(fetchDataAndUpdateChart, 5000); // Fetch data every 5 seconds initially
