import React, { useEffect, useState } from "react"
import Button from "../../components/Button"
import Navbar from "../../components/Navbar"
import "./verificationCode.css"
import ValidationSquare from "./validationSquare"
import { useNavigate } from "react-router-dom"
import ErrorMessage from "../../components/ErrorMessage"
function VerificationCode() {
  const navigate = useNavigate()
  const [otp, setOtp] = useState(new Array(6).fill(""))
  const handleChange = (elem, index) => {
    if (!isNaN(elem)) {
      setOtp([...otp.map((item, idx) => (index == idx ? elem : item))])
    }
  }
  useEffect(() => {
    if (!otp.includes("")) {
      //aca seria el codigo correcto que viene de una api
      if (otp.join("") === "111111") {
        setTimeout(() => {
          navigate("/home")
        }, 1000)
      } else {
        document.querySelector(".error-message").style.visibility = "visible"
      }
    }
  }, [otp])
  return (
    <>
      <Navbar title="Nombre de Acción" backIcon={true} />
      <div className="verification-wrapper">
        <p>Te acabamos de enviar un correo a:</p>
        <p>test@test.com.ar</p>
        <p>Ingresa el código de 6 dígitos recibido</p>

        <div className="square-validationGroup mb-15">
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
        <ErrorMessage title="Error... codigo invalido" />
        <div className="validation-btn">
          <Button color={"grey"} title="Reenviar Código" />
        </div>
      </div>
    </>
  )
}

export default VerificationCode
