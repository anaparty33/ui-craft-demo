type Unit = "metric" | "imperial" | string;

function formatTemparature(temp: number, unit: Unit) {
  if (unit === "metric") {
    const metric = Math.round(Number(temp) - 273.15);
    return `${metric} °C`;
  }

  if (unit === "imperial") {
    const imperial = Math.round(((temp - 273.15) * 9) / 5 + 32);
    return `${imperial} °F`;
  }
}

// standard and metric unit are meters/sec
function formatSpeed(speed: number, unit: Unit) {
  if (unit === "imperial") {
    const imperialSpeed = Math.round(Number(speed) * 2.237);
    return `${imperialSpeed} mi/hr`;
  }
  return `${speed} m/s`;
}

// Standard and metric unit for pascal , PSI for imperial
function formatPressure(pressure: number, unit: Unit) {
  if (unit === "imperial") {
    const imperial = Math.round(Number(pressure) / 6895);
    return `${imperial} PSI`;
  }

  return `${pressure} Pa`;
}

export { formatPressure, formatSpeed, formatTemparature };
