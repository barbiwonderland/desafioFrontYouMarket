import React from "react"
import "./account-item.css"
function AccountItem({ title, img, email }) {
  return (
    <>
      <div className="account-wrapper">
        <div className="account-avatar">
          <span>{img}</span>
        </div>
        <div className="account-detail">
          <div className="account-title">{title}</div>
          <div className="account-email">{email}</div>
        </div>
        <div className="radioBtn"></div>
      </div>
    </>
  )
}

export default AccountItem
