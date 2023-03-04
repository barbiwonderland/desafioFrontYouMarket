import "../assets/styles/button.css"
import React from "react"

function Button({ color, title, func }) {
  return (
    <>
      <div
        onClick={() => (func != undefined ? func() : null)}
        className={`button-wrapper bg-${color}`}
      >
        <div className="text-button">{title}</div>
      </div>
    </>
  )
}

export default Button
