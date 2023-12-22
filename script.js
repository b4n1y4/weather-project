const api_url="https://api.openweathermap.org/data/2.5/weather?units=metric"
const api_key="cfbee1c0199b854b834"+"7761f8f63aa46"

const search=document.querySelector(".input-val")
var btn=document.querySelector(".btn")
var icon=document.querySelector(".icon")

async function weather(city){
    const response=await fetch(api_url+`&q=${city}`+`&appid=${api_key}`);
    var data= await response.json();
    console.log(data);
    if(data.weather[0].main=="Clouds"){
        icon.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        icon.src="images/clear.png";
    }
    else if(data.weather[0].main=="Clouds"){
        icon.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Rain"){
        icon.src="images/rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        icon.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        icon.src="images/mist.png";
    }
    else if(data.weather[0].main=="Snow"){
        icon.src="images/snow.png";
    }
    
    document.querySelector(".temp-val").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".temperature").innerHTML=city;
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind-speed").innerHTML=data.wind.speed+"k/h";
    
}

btn.addEventListener("click",()=>{
weather(search.value)
})
