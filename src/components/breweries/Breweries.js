import React, { useContext } from "react";
import BreweryItem from "./BreweryItem";
import Spinner from "../layout/Spinner";
import BreweryContext from "../../context/brewery/breweryContext";

const Breweries = () => {
  const breweryContext = useContext(BreweryContext);
  const { breweries, loading } = breweryContext;

  if (loading && breweries !== null) {
    return <Spinner />;
  } else {
    return (
      <div>
        {breweries.map((brewery, index) => (
          <BreweryItem key={index} brewery={brewery} />
        ))}
      </div>
    );
  }
};

export default Breweries;
