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
            required
            minLength={10}
            maxLength={18}
            className="auth-input"
            type="text"
            pattern="^([0-9]{10})|([A-Za-z0-9._%\+\-]+@[a-z0-9.\-]+\.[a-z]{2,3})$"
            placeholder="CUIT o Correo Electronico"
          />
          {/* los colores pueden ser green o grey */}
          <Button
            color="green"
            title={"Iniciar sesion"}
            func={() => navigate("/verification")}
          />
          <div className="auth-subtitle ">
            <u>Aun no tengo cuenta</u>
          </div>
        </form>
      </div>
    </>
  )
}

export default Auth
