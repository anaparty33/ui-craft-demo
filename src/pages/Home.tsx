import DailyWeather from "../components/CityCurrentWeather";
import Forecast from "../components/Forecast";
import SearchWidget from "../components/SearchWidget";
import ToggleUnit from "../components/ToggleUnit";

export default function Home() {
  return (
    <div className="mx-auto  py-5 px-32 ">
      <div className="flex justify-between">
        <SearchWidget />
        <ToggleUnit />
      </div>
      <DailyWeather />
      <Forecast />
    </div>
  );
}
