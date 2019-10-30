import replace from "lodash/replace";
import camelCase from "lodash/camelCase";
import startCase from "lodash/startCase";

export const getParam = (param, url) => {
  let params = new URLSearchParams(url);
  return params.get(param) || "";
};

export const convertStrFormatFromUnderScoreToSpaces = string => {
  let convertedStr = startCase(camelCase(replace(string, "_", " ")));
  return convertedStr;
};
