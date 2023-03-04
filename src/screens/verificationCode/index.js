import React from "react"
import Button from "../../components/Button"
import Navbar from "../../components/Navbar"
import "./verificationCode.css"
import ValidationSquare from "./validationSquare"
function VerificationCode() {
  return (
    <>
      <Navbar title="Nombre de accion" backIcon={true} />
      <div className="verification-wrapper">
        <form
          action="
              "
        >
          <p>Te acabamos de enviar un correo a:</p>
          <p>test@test.com.ar</p>
          <p>Ingresa el codigo de 6 digitos recibido</p>
          <div className="square-validationGroup">
            <ValidationSquare /> <ValidationSquare /> <ValidationSquare />
            <ValidationSquare /> <ValidationSquare /> <ValidationSquare />
          </div>
          <Button color={"grey"} title="reenviar codigo" />
        </form>
      </div>
    </>
  )
}

export default VerificationCode
