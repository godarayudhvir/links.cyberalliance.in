var options = {
    series: 
   
    [
      {
        name: "REVENUE",
        data: [57502,1667934,225904,0]
      },
      {
        name: "Cost of Operation",
        data: [45000,1224800,185000,0]
      }
    ],
    chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Revenue graph',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['2021', '2022', 'Jan', 'Feb']
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
