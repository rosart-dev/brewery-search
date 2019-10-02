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
  CLEAR_SUGGESTIONS
} from "../types";

import BreweryURLBuilder from "../../utils/BreweryURLBuilder";

const BreweryState = props => {
  const initialState = {
    breweries: [],
    suggestions: [],
    brewery: {},
    loading: false
  };

  const [state, dispatch] = useReducer(BreweryReducer, initialState);

  const alertContext = useContext(AlertContext);

  const searchBreweries = async url => {
    setLoading();
    const res = await axios.get(`/api/breweries/getBreweries/`, {
      params: {
        url
      }
    });
    if (res.data.length === 0) {
      alertContext.setAlert(
        "Sorry, we could not find breweries for what you're looking for. Please try another search term.",
        "warning"
      );
    }
    dispatch({
      type: SEARCH_BREWERIES,
      payload: res.data
    });
  };

  //TODO - enable search auto complete
  const searchAutoComplete = async query => {
    // const res = await axios.get(
    // );
    // dispatch({
    //   type: AUTO_COMPLETE,
    //   payload: res.data
    // });
  };

  //TODO - fin
  const clearAutoCompleteSuggestions = () => {
    //   dispatch({
    //     type: CLEAR_SUGGESTIONS
    //   });
  };

  const getUserLocation = async (lat, long) => {
    setLoading();
    const res = await axios.get(`/api/google/geocoding/${lat}/${long}`);

    const url = new BreweryURLBuilder()
      .setCity(res.data.city)
      .setState(res.data.state);

    searchBreweries(url.getUrl());
  };

  const clearBreweries = () => {
    dispatch({ type: CLEAR_BREWERIES });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <BreweryContext.Provider
      value={{
        breweries: state.breweries,
        brewery: state.brewery,
        loading: state.loading,
        suggestions: state.suggestions,
        searchBreweries,
        searchAutoComplete,
        clearAutoCompleteSuggestions,
        getUserLocation,
        clearBreweries
      }}
    >
      {props.children}
    </BreweryContext.Provider>
  );
};

export default BreweryState;
