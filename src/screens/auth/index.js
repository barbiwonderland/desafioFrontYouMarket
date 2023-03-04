import React from "react"
import { useNavigate, useNavigation } from "react-router-dom"
import Button from "../../components/Button"
import Navbar from "../../components/Navbar"
import "./auth.css"
function Auth() {
  const navigate = useNavigate()
  return (
    <>
      <Navbar />

      <div className="auth-wrapper">
        <form
          action="
        "
        >
          <input
            maxLength={18}
            className="auth-input"
            type="text"
            placeholder="CUIT o Correo Electronico"
          />
          {/* los colores pueden ser green o grey */}
          <Button
            color="green"
            title={"Iniciar sesion"}
            func={() => navigate("/verification")}
          />
          <div className="auth-subtitle mt-5">
            <u>Aun no tengo cuenta</u>
          </div>
        </form>
      </div>
    </>
  )
}

export default Auth
