//[c3 charts Javascript]

//Project:	Doclinic - Responsive Admin Template
//Primary use:   Used only for the morris charts


$(function () {
  "use strict";
      
  var stackedbarcolumnChart = echarts.init(document.getElementById('stacked-column2'));
      var option = {
          
           // Setup grid
              grid: {
                  x: 40,
                  x2: 40,
                  y: 45,
                  y2: 25
              },

              // Add tooltip
              tooltip : {
                  trigger: 'axis',
                  axisPointer : {            // Axis indicator axis trigger effective
                      type : 'shadow'        // The default is a straight line, optionally: 'line' | 'shadow'
                  }
              },

              // Add legend
              legend: {
                  data: [  'Sedang Melakukan', 'Telah Menuelesaikan']
              },

              // Add custom colors
              color: ['#FF8000', '#338BCB'],

              // Enable drag recalculate
              calculable: true,

              // Horizontal axis
              xAxis: [{
                  type: 'category',
                  data: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']
              }],

              // Vertical axis
              yAxis: [{
                  type: 'value',
              }],

              // Add series
              series : [
                  
                  {
                      name:'Sedang Melakukan',
                      type:'bar',
                      stack: 'data1',
                      data:[178, 241, 210, 147, 299, 147, 299, 210, 147, 299, 147, 299]
                  },
                  {
                      name:'Telah Menuelesaikan',
                      type:'bar',
                      data:[875, 845, 985, 1254, 1425,  147, 299, 210, 147, 299, 147, 299],
                      
                  },
              ]
              // Add series
              
      };
      stackedbarcolumnChart.setOption(option);

  // Instantiate and draw our chart, passing in some options.
  setTimeout(function() {
      stackedColumnChart.groups([
          ["data1", "data2", "data3"]
      ]);
  }, 1000);

  setTimeout(function() {
      stackedColumnChart.load({
          columns: [
              ['data4', 100, -50, 150, 200, -300, -100]
          ]
      });
  }, 1500);

  setTimeout(function() {
      stackedColumnChart.groups([
          ["data1", "data2", "data3", "data4"]
      ]);
  }, 2000);

  
});