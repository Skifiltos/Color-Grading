import React, { useState, useEffect } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";
import { v4 as uuidv4 } from "uuid";

const ColorGrading = () => {

  const [colorInput, setColorInput] = useState({
    color: "",
    qty: 5
  });

  const color = new Values("rgb(0, 153, 255)");
  console.log(color.all(20));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(colorInput);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setColorInput({
      ...colorInput,
      [name]: value
    });
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">

          <input
            type="text"
            name="color"
            id="color"
            value={colorInput.color}
            maxLength={7}
            onChange={handleChange}
            className="input"
          ></input>

          <input
            type="number"
            name="qty"
            id="qty"
            value={colorInput.qty}
            max={100}
            min={5}
            step={5}
            onChange={handleChange}
            className="input"
          ></input>

        </div>
        <button className="btn btn-selector" type="submit">
          Create
        </button>
      </form>
    </>
  );
};

export default ColorGrading; 
