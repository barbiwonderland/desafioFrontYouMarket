import React from "react"
import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import Navbar from "../../components/Navbar"

import "./auth.css"
function Auth() {
  const navigate = useNavigate()
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (event.target.checkValidity()) {
        event.preventDefault()
        navigate("/verification")
        localStorage.setItem("auth", "true")
        console.log("valido")
      } else {
        console.log("invalido")
      }
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
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Error,ingrese cuil sin '-' o un email valido"
              )
            }
            onInput={(e) => e.target.setCustomValidity("")}
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
