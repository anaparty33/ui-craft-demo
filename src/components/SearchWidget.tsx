import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { CiLocationArrow1 } from "react-icons/ci";
import useGoogleMapsPlaces from "../hooks/useGoogleMapsPlaces";
import useGeolocation from "../hooks/useGeoLocation";
import useReverseGeoCode from "../hooks/useReverseGeoCode";
import { updateCoords } from "../features/coordinatesSlice";
import { useDispatch } from "react-redux";
import { formatAddress } from "../utils/formatAddress";

function SearchWidget() {
  const GEOCODE_API_KEY = import.meta.env.VITE_API_KEY_GOOGLE_MAPS;
  const GEOCODE_API_URL = "https://maps.googleapis.com/maps/api/geocode/json";

  const loader = useGoogleMapsPlaces();
  const { myLocationCoordinates } = useGeolocation();
  const reverseGeoCode = useReverseGeoCode(GEOCODE_API_URL, GEOCODE_API_KEY);
  const dispatch = useDispatch();

  const searchTerm = useRef<HTMLInputElement | null>(null);

  const handleMyLocation = async () => {
    await reverseGeoCode(myLocationCoordinates);
    if (!myLocationCoordinates)
      alert("Please refresh the page after allowing location access");

    const {
      coords: { latitude, longitude },
    } = myLocationCoordinates;
    dispatch(updateCoords({ latitude, longitude }));
  };

  const onChangeAddress = (autocomplete) => {
    if (searchTerm.current?.value) {
      searchTerm.current.value = "";
    }
    const place = autocomplete.getPlace();
    console.log("place", place);

    const latitude = place.geometry.location.lat();
    const longitude = place.geometry.location.lng();
    if (!place.geometry) return;

    dispatch(updateCoords({ latitude, longitude }));
  };
  const autoComplete = () => {
    if (!searchTerm.current) return;
    loader.load().then(() => {
      const autocomplete = new window.google.maps.places.Autocomplete(
        searchTerm.current
      );
      autocomplete.setFields(["address_component", "geometry"]);
      autocomplete.addListener("place_changed", () =>
        onChangeAddress(autocomplete)
      );
    });
  };
  autoComplete();

  return (
    <div className="w-full flex flex-row justify-center items-center space-x-4">
      <label> </label>
      <input
        data-testid="search-city"
        type="text"
        name="search-city"
        ref={searchTerm}
        placeholder="search city..."
        className="w-1/2 focus:outline-none p-2.5 rounded-md"
      />
      <BsSearch className="trasition ease-out hover:scale-125" />
      <CiLocationArrow1
        className="trasition ease-out hover:scale-125"
        onClick={handleMyLocation}
      />
    </div>
  );
}

export default SearchWidget;
