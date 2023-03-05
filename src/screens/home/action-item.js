import React from "react"
import "./action-item.css"
function ActionItem({ title, img, func }) {
  return (
    <>
      <div className="item-action" onClick={func}>
        <img src={img} alt="{title}" />
        <p>{title}</p>
      </div>
    </>
  )
}

export default ActionItem
