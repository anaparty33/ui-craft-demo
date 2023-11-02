import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY_WEATHER;
const BASE_URL = "https://api.openweathermap.org/data/2.5";
interface City {
  timezone: number
}
interface Temperature {
  max: number,
  min:number
}
interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
interface DayForecast {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: Temperature;
  weather: Weather[];
  speed: number;
  deg: number;
}
interface ForecastWeatherData {
  city: City;
  list: DayForecast[];
}

interface DailyWeatherData {
  name: string
}



function useFetchWeatherData(
  latitude: 34.0549076,
  longitude: -118.242643,
  endpoint:string,
  days:null | number = null
) {
  const [data, setData] = useState<ForecastWeatherData | DailyWeatherData | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const queryParms = {
      lat: latitude,
      lon: longitude,
      appid: API_KEY,
      cnt: days,
    };
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await axios.get(`${BASE_URL}/${endpoint}`, {
          params: queryParms,
        });
        if (response.status !== 200) throw new Error(response.statusText);
        setIsPending(false);
        setData(response.data);
        setError(null);
      } catch (error) {
        setError(`${error} Could not Fetch Data `);
        setIsPending(false);
      }
    };
    fetchData();
  }, [latitude, longitude, endpoint, days]);
  return { data, isPending, error };
}

export default useFetchWeatherData;
