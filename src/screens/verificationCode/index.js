import React, { useState } from "react"
import Button from "../../components/Button"
import Navbar from "../../components/Navbar"
import "./verificationCode.css"
import ValidationSquare from "./validationSquare"
import { useNavigate } from "react-router-dom"
function VerificationCode() {
  const navigate = useNavigate()
  const [otp, setOtp] = useState(new Array(6).fill(""))
  const handleChange = (elem, index) => {
    console.log(elem, index)
    if (!isNaN(elem)) {
      setOtp([...otp.map((item, idx) => (index == idx ? elem : item))])
      console.log(otp)
    }
    if (otp.join("") == 11111) {
      setTimeout(() => {
        navigate("/")
      }, 1000)
    } else {
      console.log("INVALIDO")
    }
  }
  return (
    <>
      <Navbar title="Nombre de accion" backIcon={true} />
      <div className="verification-wrapper">
        <p>Te acabamos de enviar un correo a:</p>
        <p>test@test.com.ar</p>
        <p>Ingresa el codigo de 6 digitos recibido</p>

        <div className="square-validationGroup">
          {otp.map((data, index) => {
            return (
              <ValidationSquare
                key={index}
                index={index}
                data={data}
                handleChange={handleChange}
              />
            )
          })}
        </div>
        <div className="acredit-btn">
          <Button color={"grey"} title="reenviar codigo" />
        </div>
      </div>
    </>
  )
}

export default VerificationCode
