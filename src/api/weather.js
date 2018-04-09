import keys from './config';

export default {
  getWeather: function (zip, cb) {
    console.log('zip:',zip, 'key:', keys.weatherApiKey)
    const requestString = "http://api.openweathermap.org/data/2.5/forecast?zip=" + zip
                        + "&cluster=yes&format=json"
                        + "&APPID=" + keys.weatherApiKey;
    const req = new XMLHttpRequest();
    req.onreadystatechange = ()=>{
      if (req.readyState == 4 && req.status == 200) {
        cb(this.responseText);
      }
    }
    req.open("get", requestString, true);
    req.send();
  },
  processResults: function() {
    return this.responseText;
    // let list = this.destructureResults(JSON.parse(this.responseText));
    // return list;
  },
  destructureResults: function (weatherItem) {
    let feature = {
      type: "Feature",
      properties: {
        city: weatherItem.name,
        weather: weatherItem.weather[0].main,
        temperature: weatherItem.main.temp,
        min: weatherItem.main.temp_min,
        max: weatherItem.main.temp_max,
        humidity: weatherItem.main.humidity,
        pressure: weatherItem.main.pressure,
        windSpeed: weatherItem.wind.speed,
        windDegrees: weatherItem.wind.deg,
        windGust: weatherItem.wind.gust,
        icon: "http://openweathermap.org/img/w/"
              + weatherItem.weather[0].icon  + ".png",
        coordinates: [weatherItem.coord.Lon, weatherItem.coord.Lat]
      },
      geometry: {
        type: "Point",
        coordinates: [weatherItem.coord.Lon, weatherItem.coord.Lat]
      }
    }
    return feature
  }
};