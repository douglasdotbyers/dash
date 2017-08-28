function setupBarChart() {
  var barChartCanvas = document.getElementById("bar-chart-canvas").getContext("2d");
  return new Chart(barChartCanvas, {
    type: "bar",
    data: {
      labels: ["Alice", "Bobby", "Clare", "David", "Ellie"],
      datasets: [{
        label: "Leads",
        backgroundColor: "rgba(144,99,132,0.2)",
        borderColor: "rgba(144,99,132,1)",
        borderWidth: 1,
        data: [10, 20, 10, 20, 10],
      },
      {
        label: "Sales",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        data: [10, 20, 10, 20, 10],
      }]
    },
    options: {
      responsive: false,
      scales: { yAxes: [{ ticks: { min: 0, max: 100 } }] }
    }
  });
}

function setupLineChart() {
  var lineChartCanvas = document.getElementById("line-chart-canvas").getContext("2d");
  return new Chart(lineChartCanvas, {
    type: "line",
    data: {
      labels: ["Alice", "Bobby", "Clare", "David", "Ellie"],
      datasets: [{
        label: "Sales",
        backgroundColor: "rgba(144,99,132,0.2)",
        borderColor: "rgba(144,99,132,1)",
        borderWidth: 1,
        data: [10, 20, 10, 20, 10],
      },
      {
        label: "Targs",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        data: [90, 80, 90, 80, 90],
      }]
    },
    options: {
      responsive: false,
      scales: { yAxes: [{ ticks: { min: 0, max: 100 } }] }
    }
  });
}

function setupRadarChart() {
  var radarChartCanvas = document.getElementById("radar-chart-canvas").getContext("2d");
  return new Chart(radarChartCanvas, {
    type: "radar",
    data: {
      labels: ["A1", "A2", "A3", "A4", "A5"],
      datasets: [{
        label: "Alice",
        tension: 0.1,
        backgroundColor: "rgba(144,99,132,0.2)",
        borderColor: "rgba(144,99,132,1)",
        pointBackgroundColor: "rgba(144,99,132,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(144,99,132,1)",
        borderWidth: 1,
        data: [40, 40, 40, 40, 40],
      },
      {
        label: "Bobby",
        tension: 0.1,
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        pointBackgroundColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        data: [50, 50, 50, 50, 50],
      },
      {
        label: "Clare",
        tension: 0.1,
        backgroundColor: "rgba(0,255,0,0.2)",
        borderColor: "rgba(0,255,0,1)",
        pointBackgroundColor: "rgba(0,255,0,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(0,255,0,1)",
        borderWidth: 1,
        data: [60, 60, 60, 60, 60],
      }]
    },
    options: {
      responsive: false,
      scale: { ticks: { min: 0, max: 100, display: false } }
    }
  });
}

function updateBarChart(barChart) {
  people = { "Alice": 0, "Bobby": 1, "Clare": 2, "David": 3, "Ellie": 4 };

  randomPersonForLeads = Object.keys(people)[Math.round(Math.random() * 4)];
  currentValueForLeads = barChart.data.datasets[0].data[people[randomPersonForLeads]];
  barChart.data.datasets[0].data[people[randomPersonForLeads]] = (currentValueForLeads + Math.random() * 20) % 100;

  randomPersonForSales = Object.keys(people)[Math.round(Math.random() * 4)];
  currentValueForSales = barChart.data.datasets[1].data[people[randomPersonForSales]];
  barChart.data.datasets[1].data[people[randomPersonForSales]] = (currentValueForSales + Math.random() * 20) % 100;

  barChart.update();
}

function updateLineChart(lineChart) {
  people = { "Alice": 0, "Bobby": 1, "Clare": 2, "David": 3, "Ellie": 4 };

  randomPersonForSales = Object.keys(people)[Math.round(Math.random() * 4)];
  currentValueForSales = lineChart.data.datasets[0].data[people[randomPersonForSales]];
  lineChart.data.datasets[0].data[people[randomPersonForSales]] = (currentValueForSales + Math.random() * 20) % 100;

  randomPersonForTargs = Object.keys(people)[Math.round(Math.random() * 4)];
  currentValueForTargs = lineChart.data.datasets[1].data[people[randomPersonForTargs]];
  lineChart.data.datasets[1].data[people[randomPersonForTargs]] = (currentValueForTargs + Math.random() * 20) % 100;

  lineChart.update();
}

function updateRadarChart(radarChart) {
  axes = { "A1": 0, "A2": 1, "A3": 2, "A4": 3, "A5": 4 };

  randomAxisForAlice = Object.keys(axes)[Math.round(Math.random() * 4)];
  currentValueForAlice = radarChart.data.datasets[0].data[axes[randomAxisForAlice]];
  radarChart.data.datasets[0].data[axes[randomAxisForAlice]] = (currentValueForAlice + Math.random() * 20) % 100;

  randomAxisForBobby = Object.keys(axes)[Math.round(Math.random() * 4)];
  currentValueForBobby = radarChart.data.datasets[1].data[axes[randomAxisForBobby]];
  radarChart.data.datasets[1].data[axes[randomAxisForBobby]] = (currentValueForBobby + Math.random() * 20) % 100;

  randomAxisForClare = Object.keys(axes)[Math.round(Math.random() * 4)];
  currentValueForClare = radarChart.data.datasets[2].data[axes[randomAxisForClare]];
  radarChart.data.datasets[2].data[axes[randomAxisForClare]] = (currentValueForClare + Math.random() * 20) % 100;

  radarChart.update();
}

$(document).ready(function() {
  var barChart   = setupBarChart();
  var lineChart  = setupLineChart();
  var radarChart = setupRadarChart();

  setInterval(function() {
    updateBarChart(barChart);
    updateLineChart(lineChart);
    updateRadarChart(radarChart);
  }, 1000);
});
