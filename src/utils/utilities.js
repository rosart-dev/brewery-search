export const getName = url => {
  let start = url.indexOf("&by_name=") + 9;
  let name = url.slice(start);
  let end = name.indexOf("&by");
  if (end > -1) {
    name = name.slice(0, end + 1);
  }

  return name;
};

export const getCity = url => {
  if (url.includes("by_city")) {
    let start = url.indexOf("&by_city=") + 9;
    let city = url.slice(start);
    let end = city.indexOf("&by");
    if (end > -1) {
      city = city.slice(0, end);
    }

    return capitalizeFirstLetter(city);
  }
};

export const getState = url => {
  if (url.includes("by_state")) {
    let start = url.indexOf("&by_state=") + 10;
    let state = url.slice(start);
    let end = state.indexOf("&by");
    if (end > -1) {
      state = state.slice(0, end + 1);
    }
    return convertStrFormatFromUnderScoreToSpaces(state).replace("&", "");
  }
};

export const getType = url => {
  if (url.includes("by_type")) {
    let start = url.indexOf("&by_type=") + 10;
    let type = url.slice(start);
    let end = type.indexOf("&by");
    if (end > -1) {
      type = type.slice(0, end + 1);
    }

    return type;
  }
};

const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const convertStrFormatFromUnderScoreToSpaces = string => {
  let strArr = string.split("_");
  strArr.forEach((word, index) => {
    strArr[index] = capitalizeFirstLetter(word);
  });

  return strArr.join().replace(",", " ");
};
