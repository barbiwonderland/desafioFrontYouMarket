import React, { useState } from "react"
import "./account-item.css"
function AccountItem({ title, img, email }) {
  const [val, setVal] = useState("")

  const onOptionChange = (e) => {
    setVal(e.target.value)
  }
  return (
    <>
      <label className="account-wrapper">
        <div className="account-avatar">
          <span>{img}</span>
        </div>
        <div className="account-detail">
          <div className="account-title">{title}</div>
          <div className="account-email">{email}</div>
        </div>

        <input
          value={title}
          checked={val === { title }}
          onChange={onOptionChange}
          type="radio"
          className="radioBtn"
        ></input>
      </label>
    </>
  )
}

export default AccountItem
