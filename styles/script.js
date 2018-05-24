google.charts.load('current', {packages: ['corechart', 'bar', ]});
google.charts.setOnLoadCallback(drawBarColors);
google.charts.setOnLoadCallback(drawChart);


function drawBarColors() {
      var data = google.visualization.arrayToDataTable([
       ['Year', 'Amount of Billion of BTU', { role: 'style' }],
       ['2015', 234192, 'color: #5a24f1'],
       ['2014', 226863, 'color: #5a24f1; fill-opacity: 0.5'],
       ['2012', 220020, 'color: #5a24f1'],
       ['2011', 222956, 'color: #5a24f1; fill-opacity: 0.5'],
       ['2010', 223518, 'color: #5a24f1'],
       ['2009', 213642,'color: #5a24f1; fill-opacity: 0.5'],
       ['2008', 195232, 'color: #5a24f1'],
       ['2007', 190489,'color: #5a24f1; fill-opacity: 0.5'],
       ['2006', 185564, 'color: #5a24f1'],
       ['2005', 183175,'color: #5a24f1; fill-opacity: 0.5'],
       ['2004', 179462, 'color: #5a24f1'],
       ['2003', 188473,'color: #5a24f1; fill-opacity: 0.5'],
       ['2002', 174327, 'color: #5a24f1'],
       ['2001', 158038,'color: #5a24f1; fill-opacity: 0.5'],
       ['2000', 194952, 'color: #5a24f1'],
      ['1999',638966,'color: #5a24f1; fill-opacity: 0.5'],
['1998',639254, 'color: #5a24f1'],
['1997',597240,'color: #5a24f1; fill-opacity: 0.5'],
['1996',586291, 'color: #5a24f1'],
['1995',571483,'color: #5a24f1; fill-opacity: 0.5'],
['1994',544365, 'color: #5a24f1'],
['1993',521176,'color: #5a24f1; fill-opacity: 0.5'],
['1992',501598, 'color: #5a24f1'],
['1991',499299,'color: #5a24f1; fill-opacity: 0.5'],
['1990',489741, 'color: #5a24f1'],
['1989',472473,'color: #5a24f1; fill-opacity: 0.5'],
['1988',444382, 'color: #5a24f1'],
['1987',417862,'color: #5a24f1; fill-opacity: 0.5'],
['1986',398095,'color: #5a24f1'],
['1985',379307, 'color: #5a24f1; fill-opacity: 0.5'],
['1984',353246,'color: #5a24f1'],
['1983',329216, 'color: #5a24f1; fill-opacity: 0.5'],
['1982',315744,'color: #5a24f1'],
['1981',317921, 'color: #5a24f1; fill-opacity: 0.5'],
['1980',309694,'color: #5a24f1'],
['1979',295551, 'color: #5a24f1; fill-opacity: 0.5'],
['1978',289031,'color: #5a24f1'],
['1977',270767, 'color: #5a24f1; fill-opacity: 0.5'],
['1976',252408,'color: #5a24f1'],
['1975',242096, 'color: #5a24f1; fill-opacity: 0.5'],
['1974',235482,'color: #5a24f1'],
['1973',237104, 'color: #5a24f1; fill-opacity: 0.5'],
['1972',209665,'color: #5a24f1'],
['1971',188564, 'color: #5a24f1; fill-opacity: 0.5'],
['1970',171346,'color: #5a24f1'],
['1969',153032, 'color: #5a24f1; fill-opacity: 0.5'],
['1968',135509,'color: #5a24f1'],
['1967',119314, 'color: #5a24f1; fill-opacity: 0.5'],
['1966',108610,'color: #5a24f1'],
['1965',95878, 'color: #5a24f1; fill-opacity: 0.5'],
['1964',87016,'color: #5a24f1'],
['1963',78258, 'color: #5a24f1; fill-opacity: 0.5'],
['1962',71216,'color: #5a24f1'],
['1961',62705, 'color: #5a24f1; fill-opacity: 0.5'],
['1960',57344,'color: #5a24f1'],
       
      ]);

      var options = {
        title: 'Renewable energy production in Florida from 1960-2015',
        legend: 'none',
        chartArea: {width: '75%'},
        colors: ['#5a24f1', '#f15a24'],
        hAxis: {
          title: 'Total of BTU',
          minValue: 0
        },
        vAxis: {
          title: 'Year'
        }
      };
      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Billion of BTU'],
          ['1960',  57344],
          ['1961',62705],
          ['1962',71216],
          ['1963',78258],
          ['1964',87016],
          ['1965',95878],
          ['1966',108610],
          ['1967',119314],
          ['1968',135509],
          ['1969',153032],
          ['1970',171346],
          ['1971',188564],
          ['1972',209665],
          ['1973',237104],
          ['1974',235482],
          ['1975',242096],
          ['1976',252408],
          ['1977',270767],
          ['1978',289031],
          ['1979',295551],
          ['1980',309694],
          ['1981',317921],
          ['1982',315744],
          ['1983',329216],
          ['1984',353246],
          ['1985',379307],
          ['1986',398095],
          ['1987',417862],
          ['1988',444382],
          ['1989',472473],
          ['1990',489741],
          ['1991',499299],
          ['1992',501598],
          ['1993',521176],
          ['1994',544365],
          ['1995',571483],
          ['1996',586291],
          ['1997',597240],
          ['1998',639254],
          ['1999',638966],
          ['2000',668216],
          ['2001',684966],
          ['2002',718136],
          ['2003',741696],
          ['2004',745810],
          ['2005',767622],
          ['2006',778685],
          ['2007',788461],
          ['2008',771702],
          ['2009',766848],
          ['2010',788887],
          ['2011',768009],
          ['2012',752941],
          ['2013',757189],
          ['2014',771379],
          ['2015',803865],
          ['2016',804283],
          
        ]);

        var options = {
          title: 'Total consumption of electricity sold in Florida from 1960-2016',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }