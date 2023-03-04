import React from "react"
import Button from "../../components/Button"
import Navbar from "../../components/Navbar"
import "./auth.css"
function Auth() {
  return (
    <>
      <Navbar />

      <div className="auth-wrapper">
        <form
          action="
        "
        >
          <input
            className="auth-input"
            type="text"
            placeholder="CUIT o Correo Electronico"
          />
          {/* los colores pueden ser green o grey */}
          <Button color="green" title={"Iniciar sesion"} />
          <div className="auth-subtitle">
            <u>Aun no tengo cuenta</u>
          </div>
        </form>
      </div>
    </>
  )
}

export default Auth
