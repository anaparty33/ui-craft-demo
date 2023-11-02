import { useEffect, useState } from "react";
import { weatherCodes } from "../assets/weatherCode";

interface WeatherIconProps {
  iconType: string;
  id: number;
  size: number;
}

const WeatherIcon = ({ iconType, id, size }: WeatherIconProps) => {
  const [path, setPath] = useState("");
  const [iconCode, setIconCode] = useState("");

  function getIconName(iconType: string, id: number) {
    let iconName;
    switch (true) {
      case iconType.includes("d"):
        iconName = weatherCodes.day[id];
        break;
      case iconType.includes("n"):
        iconName = weatherCodes.night[id];
        break;
      default: // set a default value
        console.log("Invalid icon type");
        iconName = "default-icon";
        break;
    }
    return iconName;
  }

  useEffect(() => {
    const icon = getIconName(iconType, id);
    setIconCode(icon);
    const importIcon = async () => {
      try {
        const { default: _path } = await import(
          `../assets/icons/wi_${icon}.svg`
        );
        setPath(_path);
      } catch (err) {
        console.error(err);
      }
    };
    importIcon();
  }, [iconType, id]);

  return (
    <>
      {path && (
        <img
          src={path}
          alt={iconCode}
          width={`${size}`}
          height={`${size}`}
          // className={`w-${size} h-${size} will-change-auto`}
          loading="lazy"
        />
      )}
    </>
  );
};

export default WeatherIcon;
