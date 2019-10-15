import React, { Fragment } from "react";
import spinner from "./loading.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner} style={{ width: "350px", margin: "auto", display: "block" }} alt="Loading..." />
    </Fragment>
  );
};

export default Spinner;
