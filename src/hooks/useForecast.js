import { useState } from "react";
import axios from "axios";
import getCurrentDayForecast from "../functions/getCurrentDayForecast";
import getNextDaysForecast from "../functions/getNextDaysForecast";

const API_LINK = "https://api.openweathermap.org/data/2.5/forecast?q=";
const API_KEY = "";     //api key here

const useForecast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const getData = async (location) => {
    const data = await axios(API_LINK + location + API_KEY);
    return data;  
  };

  const collectForecastData = (data) => {
    const currentDayForecastData = getCurrentDayForecast(data);
    const nextDaysForecastData = getNextDaysForecast(data["list"]);
    setForecast({ currentDayForecastData, nextDaysForecastData });
  };

  const submitRequest = async (location) => {
    setLoading(true);
    try {
      const { data } = await getData(location);
      collectForecastData(data);
    } catch (err) {
      setError(true);
    }
    setTimeout(function(){
      setLoading(false);
    }, 1000);
  };

  const disableError = () => {
    setError(false);
  };

  return {
    isError,
    isLoading,
    forecast,
    submitRequest,
    disableError,
  };
};

export default useForecast;