import React, { useState } from "react"
import Button from "../../components/Button"
import Navbar from "../../components/Navbar"
import "./acredit.css"

function Acredit() {
  const [amount, setAmount] = useState(0)
  return (
    <>
      <Navbar backIcon={true} title="Cuanto queres ingresar?" />
      <div className="wrapper-acredit">
        <div className="self-start">Saldo</div>
        <div className="currency-wrap">
          <span className="currency-code">$</span>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ width: `${amount.length}ch` }}
            minLength="1"
            maxLength="9"
            type="text"
            name=""
            placeholder="0"
          />
        </div>

        <Button title={"continuar"} color={"grey"} />
      </div>
    </>
  )
}

export default Acredit
