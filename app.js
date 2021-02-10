
// **1
/*An application programming interface ('API') is a computing interface that defines interactions between multiple software intermediaries.
It defines the kinds of calls or requests that can be made, how to make them, the data formats that should be used, the conventions to follow, etc. 
It can also provide extension mechanisms so that users can extend existing functionality in various ways and to varying degrees.[1] An API can be entirely custom,
    specific to a component, or designed based on an industry-standard to ensure interoperability. Through information hiding, APIs enable modular programming, allowing users to use the interface independently of the implementation.
    The API key is a unique identifier that authenticates requests associated with your project for usage and billing purposes. We must have at least one API key associated with your project.
    We are using the Air Pollution API which is developed by OpenWeatherMap.org.It is defined below.*/
var temp = {
    key: "87cde31000e5170290cebdd94820d23d",
    base: "https://api.openweathermap.org/data/2.5/air_pollution?"
  }
// **1


var notificationElement = document.querySelector(".notification");


// **2
//Generally browsers have the internal feature to do multiple operations using its internal APIs.Here we use Geolocation API to access the geographical coordinates and then pass the control to the setPosition function where the position object containing the latitude and longitude is the function parameter .
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
//Once we get the Cooordinates then we send the coordinates to the getAQI function for fetching the results from the API call.
function setPosition(position){
    let latitude = position.coords.latitude;//storing latitude
    let longitude = position.coords.longitude;//storing longitude
      console.log(latitude)
       console.log(longitude)
getAQI(latitude, longitude);
  }
// **3



// **4
//Fetch command is used for the the API call and after the call we get a set of values in JSON format and pass the JSON object to the displayResults function for displaying the results on the screen.
function getAQI(lat,lon) {
      fetch(`${temp.base}lat=${lat}&lon=${lon}&appid=${temp.key}`)//fetching data from api
        .then(aqi => {
          return aqi.json();
        }).then(displayResults);//function call to display results
}
// **4


// **5
//Initially we define the variables required for the elements and then we select the values from the JSON object passed to this function and then put the values in their respective HTML elements.
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
    
    let pm10=document.querySelector(".pm10-util");//selecting the aqi element from HTML
    pm10.innerHTML=`${aq.list[0].components.pm10}`//passing the json value in it
    
    let pm2=document.querySelector(".pm2_5-util");//selecting the aqi element from HTML
    pm2.innerHTML=`${aq.list[0].components.pm2_5}`//passing the json value in it

    let nh3=document.querySelector(".nh3-util");//selecting the aqi element from HTML
    nh3.innerHTML=`${aq.list[0].components.nh3}`//passing the json value in it

    

}
// **5
