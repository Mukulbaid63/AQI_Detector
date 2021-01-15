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

    let co=document.querySelector(".co-util");
    co.innerHTML=`${aq.list[0].components.co}`

    let no=document.querySelector(".no-util");
    no.innerHTML=`${aq.list[0].components.no}`

    let no2=document.querySelector(".no2-util");
    no2.innerHTML=`${aq.list[0].components.no2}`

    let o3=document.querySelector(".o3-util");
    o3.innerHTML=`${aq.list[0].components.o3}`

    let so2=document.querySelector(".so2-util");
    so2.innerHTML=`${aq.list[0].components.so2}`

    let pm2=document.querySelector(".pm2_5-util");
    pm2.innerHTML=`${aq.list[0].components.pm2_5}`

    let nh3=document.querySelector(".nh3-util");
    nh3.innerHTML=`${aq.list[0].components.nh3}`

    let pm10=document.querySelector(".pm10-util");
    pm10.innerHTML=`${aq.list[0].components.pm10}`

}
