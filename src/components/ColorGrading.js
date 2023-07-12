import React, { useState, useEffect } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";
import { v4 as uuidv4 } from "uuid";

const ColorGrading = () => {

  const [selectedColor, setSelectedColor] = useState([]);

  const [colorInput, setColorInput] = useState({
    color: "",
    qty: 5
  });



  const handleSubmit = (e) => {
    e.preventDefault();

    if (colorInput.color && colorInput.qty) {
      const { color, qty } = colorInput;

      setSelectedColor(
        new Values(color).all(Math.round(100 / parseInt(qty, 10)) * 2)
      );
    }

  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setColorInput({
      ...colorInput,
      [name]: value
    });
  };

  console.log(selectedColor);
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
      {
        selectedColor.length > 0 ? (
          selectedColor.map(el => <SingleColor key={uuidv4()} {...el} />)
        ) : (
          <h4>
            Loading...
          </h4>
        )
      }

    </>
  );
};

export default ColorGrading; 
