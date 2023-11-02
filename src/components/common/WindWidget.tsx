import { formatSpeed } from "../../utils/formatUnit";
import { FaWind } from "react-icons/fa";
interface WindWidgetProps {
  speed: number;
  unit: string;
}
function WindWidget({ speed, unit }: WindWidgetProps) {
  return (
    <div className=" flex p-4 justify-center items-center shadow-lg bg-gradient-to-br from-cyan-700 to-blue-700 rounded-lg space-x-2">
      <FaWind size={30} className="mr-1" />
      Wind
      <p className="font-medium ml-1">{formatSpeed(speed, unit)}</p>
    </div>
  );
}

export default WindWidget;
