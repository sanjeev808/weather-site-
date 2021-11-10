const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");

const temp_real_value = document.getElementById("temp_real_value");
const temp_status = document.getElementById("temp_status");

const getInfo = async (event) => {
  event.preventDefault(); //for reload form remove ?
  let cityVal = cityName.value;
  if (cityVal === "") {
    city_name.innerHTML = `Plz write the name before Search`;
  } else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=4f1d3a3fdd81591229e97e1b7e29cdde`;
      const response = await fetch(url);
      const data = await response.json();     //json file converted in pure javascript 
      // console.log(data);
      const arrData = [data];
      //api fetching in inner text
      city_name.innerText = `${arrData[0].name} ,${arrData[0].sys.country}`;
      temp_real_value.innerText = arrData[0].main.temp;
    //  temp_status.innerText = arrData[0].weather[0].main;
      document.getElementById("data_hide").style.visibility = "visible";
      const tempMood =arrData[0].weather[0].main;
     // condition

     if(tempMood == "clear"){

         temp_status.innerHTML="<i class='fas fa-sun style ='color:#FFFF00'></i>"
     }
    else if(tempMood == "clouds"){

         temp_status.innerHTML="<i class='fas fa-cloud style ='color:#f1f2f6'></i>"
     }
     else if(tempMood == "rain"){

         temp_status.innerHTML="<i class='fas fa-cloud-rain style ='color:#a4b0be'></i>"
     }
     else{

         temp_status.innerHTML="<i class='fas fa-sun style ='color:#eccc68'></i>"
     }
    } catch {
      city_name.innerHTML = `Plz Enter City Name Properly`;
    }
  }
};
submitBtn.addEventListener("click", getInfo);
