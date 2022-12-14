const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f81238e11dmsh11e751abfedcfe7p1532fcjsn63f16f278d3b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getweather = (city)=>{
    maincity.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => {
        
        temp.innerHTML = response.temp
        innertemp.innerHTML = response.temp
        feelslike.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        windspeed.innerHTML = response.wind_speed
        innerwindspeed.innerHTML = response.wind_speed
        winddegrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
	.catch(err => console.error(err));
}


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi', options)
.then(response => response.json())
.then(response => {
    tempdelhi.innerHTML = response.temp;
    humiditydelhi.innerHTML = response.humidity;
    winddelhi.innerHTML = response.wind_speed;
    
})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata', options)
.then(response => response.json())
.then(response => {
    tempkolkata.innerHTML = response.temp;
    humiditykolkata.innerHTML = response.humidity;
    windkolkata.innerHTML = response.wind_speed;
    
})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=unnao', options)
.then(response => response.json())
.then(response => {
    tempunnao.innerHTML = response.temp;
    humidityunnao.innerHTML = response.humidity;
    windunnao.innerHTML = response.wind_speed;
    
})
.catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=jaipur', options)
.then(response => response.json())
.then(response => {
    tempjaipur.innerHTML = response.temp;
    humidityjaipur.innerHTML = response.humidity;
    windjaipur.innerHTML = response.wind_speed;
    
})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kerala', options)
.then(response => response.json())
.then(response => {
    tempkerala.innerHTML = response.temp;
    humiditykerala.innerHTML = response.humidity;
    windkerala.innerHTML = response.wind_speed;
    
})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=surat', options)
.then(response => response.json())
.then(response => {
    tempsurat.innerHTML = response.temp;
    humiditysurat.innerHTML = response.humidity;
    windsurat.innerHTML = response.wind_speed;
    
})
.catch(err => console.error(err));

getweather("Delhi");

submitbutton.addEventListener("click",(e)=>{
    e.preventDefault();
    getweather(searchitem.value);
})

