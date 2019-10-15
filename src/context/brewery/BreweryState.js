import React, { useReducer, useContext } from "react";
import axios from "axios";
import BreweryContext from "./breweryContext";
import BreweryReducer from "./breweryReducer";
import AlertContext from "../../context/alert/alertContext";
import {
  SEARCH_BREWERIES,
  AUTO_COMPLETE,
  GET_BREWERY,
  SET_LOADING,
  CLEAR_BREWERIES,
  CLEAR_SUGGESTIONS,
  SAVE_PREV_URL,
  CLEAR_PREV_URL
} from "../types";

import BreweryURLBuilder from "../../utils/BreweryURLBuilder";
import { getName } from "../../utils/utilities";

const BreweryState = props => {
  const initialState = {
    breweries: [],
    suggestions: [],
    brewery: {},
    loading: false,
    url: ""
  };

  const [state, dispatch] = useReducer(BreweryReducer, initialState);

  const alertContext = useContext(AlertContext);

  const searchBreweries = async url => {
    setLoading();
    const res = await axios.get(url);
    if (res.data.length === 0) {
      alertContext.setAlert(
        "Sorry, we could not find breweries for what you're looking for. Please try another search term.",
        "warning"
      );
    } else {
      dispatch({
        type: SEARCH_BREWERIES,
        payload: res.data
      });
      savePrevUrl(url);
    }
  };

  const savePrevUrl = url => {
    dispatch({
      type: SAVE_PREV_URL,
      payload: url
    });
  };

  const getUserLocation = async (lat, long) => {
    setLoading();
    const res = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyDszS9vH_VpB6mumst6qwxOXfOAIqpcXpg`
    );

    const url = new BreweryURLBuilder()
      .setCity(
        res.data.results[0].address_components[3].long_name
          .toLowerCase()
          .replace("the ", "")
      )
      .setState(
        res.data.results[0].address_components[5].long_name
          .toLowerCase()
          .replace(" ", "_")
      );

    //Set these values in the filters bar

    searchBreweries(url.getUrl());
  };

  const clearBreweries = () => {
    dispatch({ type: CLEAR_BREWERIES });
    dispatch({ type: CLEAR_PREV_URL });
  };

  const clearFilters = () => {
    if (state.url.includes("&by_name=")) {
      let name = getName(state.url);
      const Url = new BreweryURLBuilder().setText(name);
      searchBreweries(Url.getUrl());
    } else {
      searchBreweries("https://api.openbrewerydb.org/breweries?");
    }
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <BreweryContext.Provider
      value={{
        breweries: state.breweries,
        brewery: state.brewery,
        loading: state.loading,
        url: state.url,
        suggestions: state.suggestions,
        searchBreweries,
        getUserLocation,
        clearBreweries,
        clearFilters
      }}
    >
      {props.children}
    </BreweryContext.Provider>
  );
};

export default BreweryState;
