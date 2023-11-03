import { formatCurentTime } from "../../utils/formatToLocalTime";
import { AiOutlineClockCircle } from "react-icons/ai";

interface LocalTimeWidgetProps {
  timeZone: string;
}

function LocalTimeWidget({ timeZone }: LocalTimeWidgetProps) {
  return (
    <div className="flex flex-col items-center p-4  h-full shadow-lg bg-gradient-to-br from-cyan-700 to-blue-700 rounded-lg">
      <AiOutlineClockCircle size={40} />
      <p data-testid="local-time">
        {formatCurentTime(timeZone, "ccc, dd LLL'   'hh:mm a")}
      </p>
    </div>
  );
}

export default LocalTimeWidget;
