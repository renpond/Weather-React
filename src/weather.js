import React from "react";
import axios from "axios";
import * as Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} 
      is ${response.data.main.temp}°F`
    );
  }
  let apiKey = "54cb345a2c3729ba77c24984961b3eee";
  let apiUrl = `https://api.openweathermap.org/data/2.5/
  weather?q=${props.city}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <Loader.InfinitySpin color="aqua" height={100} width={100} timeout={3000} />
  );
}
