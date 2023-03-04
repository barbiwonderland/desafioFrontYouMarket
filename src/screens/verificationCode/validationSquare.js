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
        maxLength={1}
        className="main-square"
        onChange={(e) => handleChange(e.target.value, index)}
      ></input>
    </>
  )
}

export default ValidationSquare
