import React, { useState, useContext, useEffect } from "react";
import Alert from "../layout/Alert";
import AutoComplete from "../layout/AutoComplete";
import ReactAutoComplete from "react-autocomplete";
import BreweryContext from "../../context/brewery/breweryContext";
import AlertContext from "../../context/alert/alertContext";
import BreweryURLBuilder from "../../utils/BreweryURLBuilder";

const Search = () => {
  const breweryContext = useContext(BreweryContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  const {
    searchBreweries,
    searchAutoComplete,
    clearAutoCompleteSuggestions,
    getUserLocation,
    clearBreweries,
    breweries,
    loading,
    suggestions
  } = breweryContext;

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          let lat = pos.coords.latitude;
          let long = pos.coords.longitude;
          getUserLocation(lat, long);
        },
        error => {
          console.error(error);
        }
      );
    } else {
      console.error("Blocked by client");
    }
  }, []);

  const onChange = e => {
    setText(e.target.value);
    searchAutoComplete(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter something", "warning");
    } else {
      const url = new BreweryURLBuilder().setText(text);
      searchBreweries(url.getUrl());
      setText("");
      clearAutoCompleteSuggestions();
    }
  };

  const clearAll = () => {
    clearBreweries();
  };

  return (
    <div className="mt-3 mb-2" style={wrapperStyles}>
      <Alert />
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          value={text}
          className="form-control mb-2"
          placeholder="Search Breweries..."
          onChange={onChange}
        />
        {/* <ReactAutoComplete
          placeholder="Search Breweries..."
          getItemValue={item => item.name}
          className="form-control mb-2"
          items={suggestions}
          renderItem={(item, isHighlighted) => (
            <div style={{ background: isHighlighted ? "lightgray" : "white" }}>
              {item.name}
            </div>
          )}
          value={text}
          onChange={onChange}
          style={wrapperStyles}
          // onSelect={e => value = val}
        /> */}
        <div className="row m-1 clearfix">
          <input
            type="submit"
            value="Search"
            className="btn btn-success col-md-6 col-sm-12"
          />
          {/* <div className="divider"></div> */}
          {breweries.length > 0 && (
            <input
              type="button"
              value="Clear All"
              className="btn btn-danger col-md-6 col-sm-12"
              onClick={clearAll}
            />
          )}
        </div>
      </form>
    </div>
  );
};

const wrapperStyles = {
  zIndex: "100"
};

export default Search;
