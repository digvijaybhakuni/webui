const chartCtx = document.getElementById('chart-canvas');


const barChart = new Chart(chartCtx, {
  type: 'bar',
  data: {
    labels: ['2017', '2016', '2015'],
    datasets: [
      {
        label: 'No. Of Total Case',
        data: [12, 34, 45],
        borderColor: "rgb(68,146,159)",
        backgroundColor: "rgba(68,146,159, .7)",
        borderWidth: 2
      },
      {
        label: 'No. Of Close Case',
        data: [7, 23, 34],
        borderColor: "rgb(205,167,19)",
        backgroundColor: "rgba(205,167,19, .7)",
        borderWidth: 2
      },
      {
        label: 'No. Of Open Case',
        data: [7, 6, 23],
        borderColor: "rgb(226,67,1)",
        backgroundColor: "rgba(226,67,1, .7)",
        borderWidth: 2,
        // type: 'line'
      }
    ]
  }
});

console.log("TEST");
