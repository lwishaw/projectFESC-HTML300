google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(getData);
google.charts.setOnLoadCallback(getDataCurve);

      function drawBarColors(freshData) {
        console.log("freshData", freshData)
        freshData.unshift(["Year", "Billion BTUs"])

        var data = google.visualization.arrayToDataTable(freshData);

        var options = {
          title: 'Renewable energy production in Florida from 1960-2015',
          chartArea: {width: '50%'},
          hAxis: {
            title: 'Total of BTUs',
            minValue: 0
          }
        };

        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

        chart.draw(data, options);
      }


      function getData(){
        // Create a new request object
        let request = new XMLHttpRequest()
        // TODO: URL to contact goes here
        let requestUrl = "https://api.eia.gov/series/?api_key=b5c2e12ecbdd8ee91f18bfec582206ec&series_id=SEDS.REPRB.FL.A"
        // Open a connection
        request.open('GET', requestUrl, true)
        // Callback for when the request completes
        request.onload = function(){
          let theActualData = JSON.parse(request.response).series[0].data

          drawBarColors(theActualData)
        }
        // Callback for when there's an error
        request.error = function(err){
          console.log("error is: ", err)
        }
        // Send the request to the specified URL
        request.send()
      }


function drawChart(freshData) {
        console.log("freshData", freshData)
        freshData.unshift(["Year", "Billion BTUs"])

        var data = google.visualization.arrayToDataTable(freshData);

        var options = {
          title: 'Total consumption of electricity sold in Florida from 1960-2016',
          chartArea: {width: '50%'},
          curveType: 'function',
      };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }


      function getDataCurve(){
        // Create a new request object
        let request = new XMLHttpRequest()
        // TODO: URL to contact goes here
        let requestUrl = "http://api.eia.gov/series/?api_key=b5c2e12ecbdd8ee91f18bfec582206ec&series_id=SEDS.TETCB.FL.A"
        // Open a connection
        request.open('GET', requestUrl, true)
        // Callback for when the request completes
        request.onload = function(){
          let theActualData = JSON.parse(request.response).series[0].data

          drawChart(theActualData)
        }
        // Callback for when there's an error
        request.error = function(err){
          console.log("error is: ", err)
        }
        // Send the request to the specified URL
        request.send()
      }
