import React from "react";
import Filters from "./Filters";

const Sidebar = () => {
  return (
    <div className="col-md-3 col-lg-3 rounded" style={styles}>
      <div>
        <Filters />
      </div>
    </div>
  );
};

const styles = {
  top: 71,
  left: 0,
  zIndex: 100,
  position: "fixed"
};

export default Sidebar;
