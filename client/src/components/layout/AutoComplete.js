import React, { useState } from "react";
import ReactAutoComplete from "react-autocomplete";

const AutoComplete = props => {
  return (
    <ReactAutoComplete
      getItemValue={item => item.name}
      items={props.items}
      renderItem={(item, isHighlighted) => (
        <div style={{ background: isHighlighted ? "lightgray" : "white" }}>
          {item.name}
        </div>
      )}
      value=""
      onChange={e => value => e.target.value}
      // onSelect={e => value = val}
    />
  );
};

export default AutoComplete;
