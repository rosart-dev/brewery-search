import React from "react";
import Breweries from "../breweries/Breweries";
import Search from "../breweries/Search";
import Sidebar from "../layout/Sidebar";

const Home = props => {
  return (
    <div className="row">
      <div className="d-none d-md-block">
        <Sidebar />
      </div>
      <main
        className="col-xs-12 col-sm-12 col-md-9 col-lg-9 ml-auto px-4"
        role="main"
      >
        <Search />
        <Breweries />
      </main>
    </div>
  );
};

Home.propTypes = {};

export default Home;
