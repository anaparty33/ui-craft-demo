import { useMemo } from "react";

import { Loader } from "@googlemaps/js-api-loader";

const GEOCODE_API_KEY = "AIzaSyBTM5E-Nw8-HcFjnYYowjmQ9y0ygRGlZs4";

function useGoogleMapsPlaces() {
  const loader = useMemo(() => {
    return new Loader({
      apiKey: GEOCODE_API_KEY,
      libraries: ["places"],
    });
  }, []);

  return loader;
}

export default useGoogleMapsPlaces;
