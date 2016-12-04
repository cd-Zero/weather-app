var ourRequest = new XMLHttpRequest();


ourRequest.open('GET','http://api.wunderground.com/api/62f3857a113070d5/forecast/q/autoip.json',true)

ourRequest.onload = function(){
var weatherData = JSON.parse(ourRequest.responseText);
    //test
    var currentDayData = weatherData.forecast.simpleforecast.forecastday[0];
  

    console.log(currentDayData);
    renderHTML(currentDayData);
}

ourRequest.send();



  function renderHTML(data){
    var rawTemplate = document.getElementById('forcastTemplate').innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var ourGeneratedHTML = compiledTemplate(data);
    var weatherContainer = document.querySelector("#main")

    weatherContainer.innerHTML = ourGeneratedHTML;
  }
