import React, { Fragment, useState, useContext, useEffect } from "react";
import BreweryContext from "../../context/brewery/breweryContext";
import BreweryURLBuilder from "../../utils/BreweryURLBuilder";

import {
  getParam,
  convertStrFormatFromUnderScoreToSpaces
} from "../../utils/utilities";

const Filters = () => {
  const breweryContext = useContext(BreweryContext);

  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [type, setType] = useState("");

  const handleCityChange = e => {
    setCity(e.target.value);
  };

  const handleStateChange = e => {
    setState(e.target.value);
  };

  const handleTypeChange = e => {
    setType(e.target.value);
  };

  useEffect(() => {
    if (breweryContext.url.length > 0) {
      setCity(
        convertStrFormatFromUnderScoreToSpaces(
          getParam("by_city", breweryContext.url)
        )
      );
      setState(
        convertStrFormatFromUnderScoreToSpaces(
          getParam("by_state", breweryContext.url)
        )
      );
      setType(
        convertStrFormatFromUnderScoreToSpaces(
          getParam("by_type", breweryContext.url)
        )
      );
    }
  }, [breweryContext.url]);

  const applyFilters = e => {
    let Url = new BreweryURLBuilder();

    let prevName = getParam("by_name", breweryContext.url);
    if (prevName.length) {
      Url.setText(prevName);
    }

    Url.setCity(city);
    Url.setState(state);
    Url.setType(type);
    breweryContext.searchBreweries(Url.getUrl());
  };

  const clearFilters = () => {
    setCity("");
    setState("");
    setType("");
    breweryContext.clearFilters(true);
  };

  const types = [
    "",
    "Micro",
    "Regional",
    "Brewpub",
    "Large",
    "Planning",
    "Bar",
    "Contract",
    "Proprietor"
  ];

  return (
    <Fragment>
      <form className="form">
        <div className="card shadow-lg">
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                value={city}
                placeholder="Filter by City"
                className="form-control"
                onChange={handleCityChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                type="text"
                name="state"
                id="state"
                value={state}
                placeholder="Filter by State"
                className="form-control"
                onChange={handleStateChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="type">Brewery Type</label>
              <select
                name="type"
                id="type"
                value={type}
                placeholder="Filter by Type"
                className="form-control"
                onChange={handleTypeChange}
              >
                {types.map(type => (
                  <option value={type} key={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-2">
              <input
                type="button"
                value="Apply Filters"
                className="btn btn-dark col-md-12 col-sm-12"
                onClick={applyFilters}
              />
            </div>
            <div className="mt-2">
              <input
                type="button"
                value="Clear Filters"
                className="btn btn-warning col-md-12 col-sm-12"
                onClick={clearFilters}
              />
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Filters;
