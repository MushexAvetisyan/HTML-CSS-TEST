
let optionsLine = {
  chart: {
    height: 180,
    type: 'line',
    offsetX: 0,
    offsetY: 0,
    zoom: {
      enabled: true,
    },
    toolbar: {
      offsetX: -10,
      offsetY: -6,
    }
  },
  stroke: {
    curve: 'smooth',
    width: 2,
    colors: ["#805AD5"],
    opacity: 1,
  },
  colors: ["#805AD5"],
  series: [{
    data: [100000, 330000, 180000, 480000, 350000, 250000, 580000, 280000]
  },
  ],
  grid: {
    show: true,
    borderColor: '#686868',
    padding: {
      top: -10,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  labels: ['May 2021', 'Jun 2021', 'Jul 2021', 'Aug 2021', 'Sep 2021', 'Oct 2021', 'Nov 2021', 'Dec 2021'],
  xaxis: {
    tooltip: {
      enabled: false
    },
    labels: {
      style: {
        colors: ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
        fontSize: '9px',
        fontWeight: 300,
      },
      offsetX: 0,
      offsetY: 2,
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    tickAmount: 4,
    min: 0,
    max: 800000,
    labels: {
      style: {
        colors: ["white"],
        fontSize: '10px',
        fontWeight: 400,
      },
      formatter: function (value) {
        return "$" + value;
      },
      offsetX: -18,
      offsetY: 0,
    },
    axisBorder: {
      show: true,
      color: '#78909C',
      offsetX: 0,
      offsetY: 0
    },
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    offsetY: -20
  }
}

let chartLine = new ApexCharts(document.querySelector('#line'), optionsLine);



let optionsBar = {
  series: [{
    data: [12, 15, 16, 16, 15, 12, 10, 8, 7, 8, 9, 10, 11, 12, 15, 18, 21, 23,
      22, 21, 18, 16, 16, 16, 17, 18, 19, 19, 17, 16, 13, 13, 12, 15, 17, 16, 15, 12, 10]
  }],
  chart: {
    type: 'bar',
    height: 170,
    toolbar: {
      show: false
    }
  },
  grid: {
    show: false
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '100%',
      endingShape: 'rounded',
      borderRadius: 4,
      rangeBarOverlap: true,
      borderRadiusApplication: 'around',
      colors: {
        ranges: [{
          from: 0,
          to: 0,
          color: ['#937EC199']
        }],
        backgroundBarColors: [],
        backgroundBarOpacity: 1,
        backgroundBarRadius: 0,
      },
    },
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      colorStops: [
        {
          offset: 90,
          color: "#5D557F",
          opacity: 1
        },
        {
          offset: 100,
          color: "#2E3145",
          opacity: 0.1
        }
      ]
    }
  },
  stroke: {
    show: true,
    width: 0,
    colors: ["#937EC199"],
  },
  yaxis: {
    show: false
  },
  xaxis: {
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
};

let chartBar = new ApexCharts(document.querySelector("#BarChart"), optionsBar);
chartBar.render();



var randomizeArray = function (arg) {
  var array = arg.slice();
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

let sparklineData = [0, 18, 19, 30, 38, 39, 42, 39, 45, 53, 43, 45, 48, 49, 55, 46, 40, 45, 45, 50, 53, 54, 55, 66];


let options = {
  series: [{
    data: (sparklineData)
  }],
  chart: {
    type: 'area',
    height: 122,
    offsetY: -23,
    offsetX: 0,
    zoom: {
      enabled: false
    },
    sparkline: {
      enabled: true
    },
  },
  plotOptions: {
    bar: {
      colors: {
        ranges: [{
          from: 0,
          to: 0,
          color: ['#937EC199']
        }],
        backgroundBarColors: [],
        backgroundBarOpacity: 1,
        backgroundBarRadius: 0,
      },
    }
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      colorStops: [
        {
          offset: 20,
          color: "#7044D7",
          opacity: 0.8
        },
        {
          offset: 70,
          color: "#7044D7",
          opacity: 0.1
        }
      ]
    }
  },
  grid: {
    show: false
  },
  stroke: {
    curve: 'straight',
    width: 0,
    colors: ["#937EC199"],
  },
  labels: [...Array(24).keys()].map(n => `2018-09-0${n+1}`),
  xaxis: {
    type: 'datetime',
  },
  yaxis: {
    show: false,
  },
  legend: {
    horizontalAlign: 'left'
  }
};

let chart = new ApexCharts(document.querySelector("#futureChart"), options);
chart.render();


// a small hack to extend height in website sample dashboard
chartLine.render().then(function () {
  let ifr = document.querySelector("#wrapper");
  if (ifr.contentDocument) {
    ifr.style.height = ifr.contentDocument.body.scrollHeight + 20 + 'px';
  }
});
