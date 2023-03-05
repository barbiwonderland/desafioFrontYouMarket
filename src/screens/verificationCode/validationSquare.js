import React, { useEffect } from "react"
import "./validationSquare.css"
function ValidationSquare({ index, data, handleChange }) {
  return (
    <>
      <input
        defaultValue={data}
        name="code-number"
        id="validationInput"
        typeof="number"
        pattern="[0-9]+"
        maxLength={1}
        required
        className="main-square"
        onChange={(e) => handleChange(e.target.value, index)}
      ></input>
    </>
  )
}

export default ValidationSquare
