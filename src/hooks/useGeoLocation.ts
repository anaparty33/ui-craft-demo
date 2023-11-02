import { useState, useEffect } from "react";

function useGeolocation() {
  const [myLocationCoordinates, setmyLocationCoordinates] = useState<GeolocationPosition  | null >(null);
  const [error, setError] = useState<GeolocationPositionError  | null >(null);

  useEffect(() => {
    if (navigator.geolocation) {
      
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setmyLocationCoordinates(position);
        },
        (error) => {
          setError(error);
          alert("Please allow location access")
        }
      );
    }
  }, []);

  return { myLocationCoordinates, error };
}

export default useGeolocation;
