import { Zone } from "luxon";
import { formatToLocalTime } from "../../utils/formatToLocalTime";

interface SunTimingWidgetProps {
  time: number;
  timeZone: Zone | string;
  Image: React.ReactNode;
}

export default function SunTimingWidget({
  Image,
  time,
  timeZone,
}: SunTimingWidgetProps) {
  return (
    <div className="flex flex-col p-4 justify-center items-center h-full shadow-lg bg-gradient-to-br from-cyan-700 to-blue-700 rounded-lg">
      {Image}
      <p className="font-medium ml-1 rounded-lg" data-testid="sun-timing">
        {formatToLocalTime(time, timeZone, "hh:mm a")}
      </p>
    </div>
  );
}
