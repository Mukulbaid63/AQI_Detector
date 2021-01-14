var temp = {
    key: "87cde31000e5170290cebdd94820d23d",
    base: "https://api.openweathermap.org/data/2.5/air_pollution?"
  }
var notificationElement = document.querySelector(".notification");
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setPosition);
    notificationElement.innerHTML = "";

}
else {
    notificationElement.innerHTML = "Geolocation is not supported by this browser.";
  }
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(latitude);
    console.log(longitude);    
getAQI(latitude, longitude);
  }
function getAQI(lat,lon) {
      fetch(`${temp.base}lat=${lat}&lon=${lon}&appid=${temp.key}`)
        .then(aqi => {
          return aqi.json();
        }).then(displayResults);
}
function displayResults(aq){
    let aqi=document.querySelector(".aqi");
    aqi.innerHTML=`${aq.list[0].main.aqi}`;
    let location=document.querySelector(".location");
  
}
