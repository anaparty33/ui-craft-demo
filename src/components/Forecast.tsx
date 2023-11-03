import { useSelector } from "react-redux";
import useFetchWeatherData from "../hooks/useFetchWeatherData";

import DayForeacastCard from "./common/DayForeacastCard";
import LoaderSpinner from "./common/LoaderSpinner";
import { RootState } from "../store";

function Forecast() {
  const { latitude, longitude } = useSelector(
    (state: RootState) => state.coordinates.coordinates
  );
  const unit = useSelector((state: RootState) => state.unit.unit);

  const { data, isPending, error } = useFetchWeatherData(
    latitude,
    longitude,
    "forecast/daily",
    14
  );

  return (
    <div>
      {isPending && <LoaderSpinner />}
      {error && <div>{error}</div>}
      <div className=" rounded-lg shadow-lg  text-white   mt-5">
        <p className="pt-4 mb-4 text-xl"> Next 14 Days</p>
        <div className="grid grid-cols-2 lg:grid-cols-7 sm:grid-cols-3 grid-rows-2 gap-4">
          {data &&
            "list" in data &&
            Array.isArray(data.list) &&
            data.list.map((day) => (
              <DayForeacastCard
                day={day}
                timezone={data.city.timezone}
                unit={unit}
                key={day.dt}
              />
            ))}
        </div>
      </div>

      {}
    </div>
  );
}

export default Forecast;
