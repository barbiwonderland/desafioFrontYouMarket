import React from "react"
import { useNavigate } from "react-router-dom"
import { img404 } from "../../assets/images"
import Button from "../../components/Button"
import Navbar from "../../components/Navbar"

import "./notFound.css"
function NotFound() {
  const navigate = useNavigate()

  return (
    <>
      <Navbar backIcon={true} />
      <div className="notFound-wrapper">
        <img src={img404} alt="" />
        <h3>Pagina no encontrada</h3>
        <Button title={"Volver"} color="grey" func={() => navigate(-1)} />
      </div>
    </>
  )
}

export default NotFound
