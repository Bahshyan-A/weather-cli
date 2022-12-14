import axios from "axios";
import { Storage } from "./storage.service.js";

class WeatherAPI {
  #baseUrl = "https://api.openweathermap.org/data/2.5/weather";
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  getCityWeather = async (city) => {
    if (!this.apiKey.length) {
      throw new Error(
        "Отсутствует токен, задайте его с помощью команды -t [API_KEY]"
      );
    }
    if (!city.length) {
        throw new Error(
          "Уажите город, задайте его с помощью команды -s [city]"
        );
      }

    const { data, path, params } = await axios.get(this.#baseUrl, {
      params: {
        q: city,
        appid: this.apiKey,
        lang: "ru",
        units: "metric",
      },
    });

    console.log(data)
  };

  createURL = (params) => {
    let url = new URL(this.#baseUrl);
    // append params for url: [key, val]
    params.forEach((el) => {
      url.searchParams.append(el[0], el[1]);
    });

    return url;
  };
}

export {WeatherAPI};