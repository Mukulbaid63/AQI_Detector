//apikey and url defining
// **1
var temp = {
    key: "87cde31000e5170290cebdd94820d23d",
    base: "https://api.openweathermap.org/data/2.5/air_pollution?"
  }
// **1


var notificationElement = document.querySelector(".notification");


// **2
//Accessing the location from the browser using geo location
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setPosition);
    notificationElement.innerHTML = "";

}
else {
    //if your browser doesnt supports geolocation error message will be displayed.
    notificationElement.innerHTML = "Geolocation is not supported by this browser.";
  }
// **2


// **3
//passes the coordinates to the APi and does a function call
function setPosition(position){
    let latitude = position.coords.latitude;//storing latitude
    let longitude = position.coords.longitude;//storing longitude
      
getAQI(latitude, longitude);
  }
// **3



// **4
function getAQI(lat,lon) {
      fetch(`${temp.base}lat=${lat}&lon=${lon}&appid=${temp.key}`)//fetching data from api
        .then(aqi => {
          return aqi.json();
        }).then(displayResults);//function call to display results
}
// **4


// **5
function displayResults(aq){
    let aqi=document.querySelector(".aqi");//selecting the aqi element from HTML
    aqi.innerHTML=`${aq.list[0].main.aqi}`;//passing the json value in it

    let co=document.querySelector(".co-util");//selecting the aqi element from HTML
    co.innerHTML=`${aq.list[0].components.co}`//passing the json value in it

    let no=document.querySelector(".no-util");//selecting the aqi element from HTML
    no.innerHTML=`${aq.list[0].components.no}`//passing the json value in it

    let no2=document.querySelector(".no2-util");//selecting the aqi element from HTML
    no2.innerHTML=`${aq.list[0].components.no2}`//passing the json value in it

    let o3=document.querySelector(".o3-util");//selecting the aqi element from HTML
    o3.innerHTML=`${aq.list[0].components.o3}`//passing the json value in it

    let so2=document.querySelector(".so2-util");//selecting the aqi element from HTML
    so2.innerHTML=`${aq.list[0].components.so2}`//passing the json value in it

    let pm2=document.querySelector(".pm2_5-util");//selecting the aqi element from HTML
    pm2.innerHTML=`${aq.list[0].components.pm2_5}`//passing the json value in it

    let nh3=document.querySelector(".nh3-util");//selecting the aqi element from HTML
    nh3.innerHTML=`${aq.list[0].components.nh3}`//passing the json value in it

    let pm10=document.querySelector(".pm10-util");//selecting the aqi element from HTML
    pm10.innerHTML=`${aq.list[0].components.pm10}`//passing the json value in it

}
// **5
