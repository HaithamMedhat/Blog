import React from "react";
import { useState } from "react";

const Textarea = React.forwardRef((props, ref) => {
  const { type, name, labelName , value} = props;


  return (
    <div className="my-2" key={name}>
      <label
        style={{ color:'black', fontSize: "18px", padding: "3px 0", fontWeight: "bold"}}
        htmlFor={name}
        className={"me-3 "}
      >
        {labelName}
      </label>  
      <textarea
        rows="5"
        id={name}
        className="form-control"
        type={type}
        name={name}
        ref={ref}
        defaultValue={value} 
        key={value}
      />
    </div>
  );
});

export default Textarea;
