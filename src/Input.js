import React, { useState } from "react";

const Input = (props) => {
  const { renderTextBelow } = props;
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <input type="text" value={value} onChange={handleChange} />
      <br />
      {renderTextBelow(value)}
    </>
  );
};

export default Input;
