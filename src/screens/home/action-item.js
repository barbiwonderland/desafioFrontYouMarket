import React from "react"

function ActionItem({ title, img }) {
  return (
    <>
      <div className="item-action">
        <img src={img} alt="{title}" />
        <p>{title}</p>
      </div>
    </>
  )
}

export default ActionItem
