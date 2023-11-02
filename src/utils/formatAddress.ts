export const formatAddress = (place: { address_components?: Array<{ types: string[], long_name: string }> }) => {
  const address = {
    city: "",
    country: "",
    state: "",
    postal: "",
  };

  if (!Array.isArray(place?.address_components)) {
    return address;
  }

  place.address_components.forEach((component) => {
    const { types, long_name: address_value } = component;
    if (types.includes("locality")) {
      address.city = address_value;
    }
    if (types.includes("administrative_area_level_1")) {
      address.state = address_value;
    }
    if (types.includes("country")) {
      address.country = address_value;
    }
    if (types.includes("postal_code")) {
      address.postal = address_value;
    }
  });

  return address;
};
