import React from "react"
import { useNavigate, useNavigation } from "react-router-dom"
import Button from "../../components/Button"
import Navbar from "../../components/Navbar"
import "./auth.css"
function Auth() {
  const navigate = useNavigate()
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault()
      navigate("/verification")
      localStorage.setItem("auth", "true")
    }
  }
  return (
    <>
      <Navbar />

      <div className="auth-wrapper">
        <form
          action="
        "
        >
          <input
            onKeyDown={(e) => handleKeyDown(e)}
            required
            minLength={10}
            maxLength={18}
            className="auth-input"
            type="text"
            pattern="^([0-9]{11})|([A-Za-z0-9._%\+\-]+@[a-z0-9.\-]+\.[a-z]{2,3})$"
            placeholder="CUIT o Correo Electrónico"
          />
          {/* los colores pueden ser green o grey */}
          <Button
            color="green"
            title={"Iniciar sesión"}
            func={() => navigate("/verification")}
          />
          <div className="auth-subtitle ">
            <u>Aún no tengo cuenta</u>
          </div>
        </form>
      </div>
    </>
  )
}

export default Auth
