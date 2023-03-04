import React from "react"
import "../assets/styles/navbar.css"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
function Navbar({ title, backIcon }) {
  const navigate = useNavigate()
  return (
    <>
      <nav className="main-navbar">
        <>
          <div className="navbar-icon" onClick={() => navigate(-1)}>
            {backIcon && <AiOutlineArrowLeft size={16} />}
          </div>
          {title !== undefined && <div className="navbar-title">{title}</div>}
          <div className=""></div>
        </>
      </nav>
    </>
  )
}

export default Navbar
