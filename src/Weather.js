import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [temp, setTemp] = useState("");
  let [icon, setIcon] = useState("");
  let [condition, setCondition] = useState("");
  let [humidity, setHumidity] = useState("");
  let [windspeed, setWindspeed] = useState("");

  function displayForecast(response) {
    setTemp(Math.round(response.data.main.temp));
    setHumidity(Math.round(response.data.main.humidity));
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    setCondition(response.data.weather[0].main);
    setWindspeed(response.data.wind.speed);
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=389591576a5c2ac7834f2735d7f36205&units=metric`;
  axios.get(url).then(displayForecast);

  return (
    <div>
      <img src={icon} alt={condition} width="100px" />
      <h3>
        {condition} in {props.city}
      </h3>
      <p>
        {temp}°C
        <br />
        Humidity: {humidity}%
        <br />
        Windspeed: {windspeed}m/s
      </p>
    </div>
  );
}
