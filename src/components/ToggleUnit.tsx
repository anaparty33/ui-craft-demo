import { useSelector, useDispatch } from "react-redux";
import { updateUnits } from "../features/unitSlice";
import { RootState } from "../store";

function ToggleUnit() {
  const currentUnit = useSelector((state: RootState) => state.unit.unit);

  const units = ["metric", "imperial"];
  const mapUnits: Record<string, string> = {
    metric: "°C",
    imperial: "°F",
  };

  const otheroption = units.filter((unit) => unit !== currentUnit);
  const dispatch = useDispatch();

  return (
    <>
      <label htmlFor="unit"></label>
      <select
        id="unit"
        data-testid="select-unit"
        value={currentUnit}
        onChange={(e) => {
          console.log(e.target.value);
          dispatch(updateUnits(e.target.value));
        }}
      >
        <option value={otheroption}> {mapUnits[otheroption[0]]}</option>
        <option value={currentUnit}> {mapUnits[currentUnit]}</option>
      </select>
    </>
  );
}

export default ToggleUnit;
