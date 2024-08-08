import API_KEY from './apikey.js';


const apiKey = API_KEY;
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const midUrl = '&units=metric&appid=';

let city = '';
//NEXT UPDATE - CONDITIONS AVERAGE ON DAYS const const baseUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=';
const weatherInfo = async function (city){
    const response = await fetch(
        baseUrl + city + midUrl + apiKey
    );
    const jsonResponse = await response.json();

    //find keys that you will use - Activate jsonResponse log below to find where are they located and convert them in variables.
    // console.log(jsonResponse); //Activate this console.log to check the data in the console

    const name = jsonResponse.name;
    const temp = Math.floor(jsonResponse.main.temp);
    const speed = jsonResponse.wind.speed;
    const sky = jsonResponse.weather[0].description
    let rain = jsonResponse.rain;


    //rain object in the DATA can be undefined if there is no rain within 1h so I assigned the value 0 for these cases.
    //When it is defined I assigned the value of its parameter 1h.
    if(jsonResponse.rain === undefined) {
        rain = 0;
    } else {
        rain = jsonResponse.rain["1h"];
    }


    let sentenceA = '';
    if (rain === 0) {
        sentenceA = ' No rain at first sight.'; 

    } else if (rain>0 && rain<=5){

        sentenceA = ' However, it is raining now. Put at least a waterproof jacket on top or take an umbrella.';

    } else if (speed > 14 && rain>0 && rain<=5){

        sentenceA = ' However, it is raining now. Put at least a waterproof jacket on top.';

    }else if (rain>5){
        
        sentenceA = ' It is flooded outside! you could use your kayak!';
    };



    //Temperature Ranges - Return values to variable we state to create the sentence.
    let sentenceB = '';
    if(temp <= 3) {

        sentenceB = ' Don\'t go out, it is too cold. There is no layers than can save you...';

    } else if (temp > 3, temp <= 10) {

        sentenceB = ' You will be fine wearing a jacket, a jumper and long trousers.';

    } else if (temp > 10, temp <= 18) {

        sentenceB = ' You will be fine wearing a jumper and long trousers.';

    } else if (temp > 18, temp <= 22) {

        sentenceB = ' You will be fine wearing a t-shirt and long trousers.';

    } else if (temp > 22, temp <= 30) {

        sentenceB = ' You will be fine wearing a t-shirt and shorts.';

    } else if (temp > 30, temp <= 35) {

        sentenceB = ' You will be fine wearing a T-shirt (no sleeves) and a swimming suit.';

    } else if (temp > 35) {

        sentenceB = ' It is too hot! Stay at home, you can\'t go out naked...';

    };



    //wind Ranges - Return values to variable we state to create the sentence.
    let sentenceC = '';
    if(speed <= 10 && temp > 35) {

        sentenceC = ' There is just a gentle breeze outside but it is too hot to go out... wait a couple of hours. Have a siesta!';

    } else if (speed <= 10 && temp > 22 && temp < 35) {

        sentenceC = ' It is warm and there is just a gentle breeze. You can also wear a hat or a fancy pamela if you want...';
    
    } else if (speed <= 10) {

        sentenceC = ' You\'ll feel a gentle breeze so you can also wear a hat or a fancy pamela if you want.';
    
    }else if (speed>10 && speed<=14) {

        sentenceC = ' Wear a hat at your own risk. it could fly because it is a bit windy outside.';
    
    } else if (rain > 0 && speed>14 && speed<=17) {

        sentenceC = ' Ideally, you would use an umbrella but the wind is strong outside. Don\'t use it unless you\'d like a challenge. It is very likely it will end up in a bin...';

    } else if (speed>17) {

        sentenceC = ' DON\'T GO OUT UNLESS YOU WANT TO FLY.';

    } ;





    //Activate below checker in console
    //console.log(name, temp, speed, rain, sky);

    //Display data on HTML classes
    document.querySelector('.city').innerHTML = 'Right now in ' + name + '...'
    document.querySelector('.cloth').innerHTML = sentenceB + sentenceA + sentenceC
    document.querySelector('.temp').innerHTML = '+ Temperature is around ' + temp + '°C.'
    document.querySelector('.description').innerHTML = '+ how\'s the sky?  ' + sky + '.'


    

};



// Search-bar making it to work
const search = () => {
    city = document.querySelector('.search-bar').value;
    
}

document.querySelector('.search button').addEventListener("click", function() {
    search();
    weatherInfo(city);
});

document.querySelector('.search-bar').addEventListener("keyup", function (event) {
    if(event.key === 'Enter') {
    search();
    weatherInfo(city);
    }
});


/*
URL example: https://api.openweathermap.org/data/2.5/weather?q= + CARDIFF + &units=metric&appid= + APIKEY
This will get the data using metric as units so we could use degrees.
TO DO: City parameter is the imput from the user in the search bar.
*/
