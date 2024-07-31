# FunWeatherApp
App to advise about the weather telling you what you could wear. The main intention is to find contradictions on what to wear, being possible that the app suggest you to wear shorts and t-shirt because is warm enough but also to wear a raincoat because is raining and a hat/pamela on top of it because it is not that windy to worry about it.

This is a simple browser app made by using HTML, CSS and JavaScript.

Live demo was deployed here: https://funweatherapp.netlify.app/

# How to test it your own?
### IDE
This app has been done in Visual Studio Code (v1.91.1) and can be deployed locally using the live server extension.

The weather source data is from [https://openweathermap.org/](https://openweathermap.org/) using the url extension that retrieve the data in metric units.

### It uses the following variables from the data source:
- name: city name that is searched
- temp: temperature in celsius --> *'&units=metric'* was added to the url.
- rain: this is rain in mm --> If it is not raining this parameter is not found in the data. For these cases, 0 value is given to the rain variable.
- speed: for the speed of the wind (m/s)
- description: renamed as sky

### Steps to test it

- Download all the files.

- Replace the value of the myAPIkey variable inside the apikey.example.js with your own API Key from [https://openweathermap.org/](https://openweathermap.org/) and save the file as "apikey.js". *To find your own API key you only need to register, click on your profile and go to My API Keys.*
    
- Do the changes to want to the main.js code. Change the ranges or the sentences, add more of them. Be creative.

- I deployed the project folder in [Netlify](https://www.netlify.com/). However, you can also use it locally.
  *The easiest way of doing it locally is by opening the project folder in Visual Studio Code, install the ['Live Server' extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), and use the live server icon to deploy the project locally on your main browser.*

