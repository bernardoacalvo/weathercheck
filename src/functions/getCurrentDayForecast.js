const getCurrentDayForecast = (data) => ({
  city: data["city"]["name"],
  country: data["city"]["country"],
  lat: data["city"]["coord"]["lat"],
  lon: data["city"]["coord"]["lon"],
  temperature: data["list"][0]["main"]["temp"],
  minTemperature: data["list"][0]["main"]["temp_min"],
  maxTemperature: data["list"][0]["main"]["temp_max"],
  weather: data["list"][0]["weather"][0]["main"],
  icon: data["list"][0]["weather"][0]["icon"],
  weatherDesc: data["list"][0]["weather"][0]["description"],
  feelsLike: data["list"][0]["main"]["feels_like"],
  humidity: data["list"][0]["main"]["humidity"],
  windSpeed: data["list"][0]["wind"]["speed"],
});

export default getCurrentDayForecast;
