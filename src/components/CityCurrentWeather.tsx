import {
  FaTemperatureFull,
  FaTemperatureArrowUp,
  FaTemperatureArrowDown,
} from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { GiPressureCooker } from "react-icons/gi";
import { BsFillSunriseFill, BsFillSunsetFill } from "react-icons/bs";

import { formatCurrentWeather } from "../utils/formatCurrentWeather";

import WeatherIcon from "../sharedIcons/WeatherIcon";
import { useSelector } from "react-redux";
import useFetchWeatherData from "../hooks/useFetchWeatherData";
import { isNull } from "lodash";

import { formatPressure, formatTemparature } from "../utils/formatUnit";
import LoaderSpinner from "./common/LoaderSpinner";
import SunTimingWidget from "./common/SunTimingWidget";
import WindWidget from "./common/WindWidget";
import TemparatureWidget from "./common/TemparatureWidget";
import LocalTimeWidget from "./common/LocalTimeWidget";
import { RootState } from "../store";

function CityCurrentWeather() {
  const { latitude, longitude } = useSelector(
    (state: RootState) => state.coordinates.coordinates
  );

  const unit = useSelector((state: RootState) => state.unit.unit);

  const { data, isPending, error } = useFetchWeatherData(
    latitude,
    longitude,
    "weather"
  );

  return (
    <>
      {isPending && <LoaderSpinner />}
      {error && <div>{error}</div>}
      {!isNull(data) && (
        <div className="flex flex-row justify-start space-x-12">
          <div className="flex flex-row items-center justify-between text-white p-3 w-1/3 shadow-lg rounded-lg bg-gradient-to-br from-cyan-700 to-blue-700 ">
            <div className="mt-5">
              <p className="text-xl" data-testid="city-name">
                {"name" in data && data.name}{" "}
              </p>
              <p className="text-xs p-2" data-testid="country">
                {formatCurrentWeather(data).country}
              </p>
              <p className="text-4xl">{`${formatTemparature(
                formatCurrentWeather(data).temp,
                unit
              )}`}</p>
              <div className="flex flex-col space-y-2 pt-5">
                <div className="flex font-light text-sm items-center justify-center">
                  <FaTemperatureFull size={18} className="mr-1" />
                  Feel Like:
                  <span
                    className="font-medium ml-1"
                    data-testid="feels-like"
                  >{`${formatTemparature(
                    formatCurrentWeather(data).feels_like,
                    unit
                  )}`}</span>
                </div>
                <p className="flex font-light text-sm items-center justify-center">
                  <WiHumidity size={18} className="mr-1" />
                  Humidity:
                  <span
                    className="font-medium ml-1"
                    data-testid="humidity"
                  >{`${formatCurrentWeather(data).humidity.toFixed()}%`}</span>
                </p>
                <p className="flex font-light text-sm items-center justify-center">
                  <GiPressureCooker size={18} />
                  Pressure:
                  <span className="font-medium ml-1" data-testid="pressure">
                    {formatPressure(formatCurrentWeather(data).pressure, unit)}
                  </span>
                </p>
              </div>
            </div>

            <div className=" mt-6 flex flex-col items-center justify-center">
              <p className="text-lg">
                {formatCurrentWeather(data).description}
              </p>
              <WeatherIcon
                iconType={formatCurrentWeather(data).icon}
                id={formatCurrentWeather(data).iconId}
                size={150}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 items-center justify-center space-x-2 text-white py-3">
            <LocalTimeWidget timeZone={formatCurrentWeather(data).timezone} />
            <SunTimingWidget
              Image={<BsFillSunriseFill size={40} />}
              time={formatCurrentWeather(data).sunrise}
              timeZone={formatCurrentWeather(data).timezone}
            />
            <SunTimingWidget
              Image={<BsFillSunsetFill size={40} />}
              time={formatCurrentWeather(data).sunset}
              timeZone={formatCurrentWeather(data).timezone}
            />

            <WindWidget
              speed={formatCurrentWeather(data).wind_speed}
              unit={unit}
            />

            <TemparatureWidget
              Image={<FaTemperatureArrowUp size={20} />}
              temp={formatCurrentWeather(data).temp_max}
              unit={unit}
            />
            <TemparatureWidget
              Image={<FaTemperatureArrowDown size={20} />}
              temp={formatCurrentWeather(data).temp_min}
              unit={unit}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default CityCurrentWeather;
