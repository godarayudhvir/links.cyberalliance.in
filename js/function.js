var options = {
    series: 
   
    [
      {
        name: "REVENUE",
        data: [523627,97827,59332,95320,264701,266361]
      },
      {
        name: "Cost of Operation",
        data: [523579,98016,56180,87817,272676,215997]
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
    categories: ['PVFY 21-22', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov']
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
