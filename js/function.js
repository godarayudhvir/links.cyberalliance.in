var options = {
    series: 
   
    [
      {
        name: "REVENUE",
        data: [25800,5200,14600,20305,25800,49160,0,0,0]
      },
      {
        name: "Cost of Operation",
        data: [26760,2500,7342,18350,14200,15800,0,0,0]
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
    text: 'Income by Month',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Dec','Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
