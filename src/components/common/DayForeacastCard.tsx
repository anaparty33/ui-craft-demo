import { formatToLocalTime } from "../../utils/formatToLocalTime";
import { formatTemparature } from "../../utils/formatUnit";

import WeatherIcon from "../../sharedIcons/WeatherIcon";
import { Zone } from "luxon";

interface DayForecastCardProps {
  day: {
    dt: number;
    weather: {
      icon: string;
      id: number;
      description: string;
    }[];
    temp: {
      max: number;
      min: number;
    };
  };
  timezone: Zone;
  unit: string;
}
function DayForeacastCard({ day, timezone, unit }: DayForecastCardProps) {
  return (
    <div className="flex flex-col space-y-1 items-center shadow-lg bg-gradient-to-br from-cyan-700 to-blue-700 rounded-lg  text-sm font-medium p-6">
      <p>{formatToLocalTime(day.dt, timezone, "ccc, dd LLL")}</p>
      <WeatherIcon
        iconType={day.weather[0].icon}
        id={day.weather[0].id}
        size={75}
      />
      <p data-testid="max-temp">⬆ {formatTemparature(day.temp.max, unit)}</p>
      <p data-testid="min-temp">⬇ {formatTemparature(day.temp.min, unit)}</p>
      <p> {day.weather[0].description}</p>
    </div>
  );
}

export default DayForeacastCard;
