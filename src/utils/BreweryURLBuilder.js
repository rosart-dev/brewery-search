class BreweryURLBuilder {
  constructor() {
    this.url = "https://api.openbrewerydb.org/breweries?";
  }

  getUrl = () => {
    return this.url;
  };

  setText = text => {
    this.url += `&by_name=${text}`;
    return this;
  };

  setCity = city => {
    this.url += `&by_city=${city}`;
    return this;
  };

  setState = state => {
    this.url += `&by_state=${state}`;
    return this;
  };

  setType = type => {
    this.url += `&by_type=${type}`;
    return this;
  };
}

export default BreweryURLBuilder;
