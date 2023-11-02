import axios from "axios";
import { formatAddress } from "../utils/formatAddress";


function useReverseGeoCode(apiUrl:string, api_key: string) {
  const reverseGeoCode = async (position: GeolocationPosition | null) => {
    if(position) {
      const {
        coords: { latitude, longitude },
      } = position;
      try {
        const {
          data: { results },
        } = await axios.get(
          `${apiUrl}?latlng=${latitude},${longitude}&key=${api_key}`
        );
        const current_place = results[0];
        return formatAddress(current_place);
      } catch (err) {
        console.log(err)
      }
    }
   
    return null;
  };
  return reverseGeoCode;
}

export default useReverseGeoCode;
