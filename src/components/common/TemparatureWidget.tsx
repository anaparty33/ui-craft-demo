import { formatTemparature } from "../../utils/formatUnit";

interface TemparatureWidget {
  temp: number;
  unit: string;
  Image: React.ReactNode;
}

function TemparatureWidget({ temp, unit, Image }: TemparatureWidget) {
  return (
    <div className="flex p-5 justify-center shadow-lg bg-gradient-to-br from-cyan-700 to-blue-700 rounded-lg">
      {Image}
      <p
        className="font-medium ml-1"
        data-testid="temparature"
      >{`${formatTemparature(temp, unit)}`}</p>
    </div>
  );
}

export default TemparatureWidget;
