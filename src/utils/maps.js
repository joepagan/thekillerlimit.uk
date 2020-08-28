export const googleMapsUrl = (query) => {
  return encodeURI(`https://www.google.com/maps/search/?api=1&query=${query}`);
}

export const appleMapsUrl = (latitude, longitude) => {
  return encodeURI(`maps://maps.apple.com/?ll=${latitude},${longitude}&q=${latitude},${longitude}`);
}
