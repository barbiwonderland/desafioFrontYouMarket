import React from "react"
import Navbar from "../../components/Navbar"
import "./index.css"
import {
  AjustesImg,
  CargarSaldoImg,
  MovimientosImg,
  EnviarPremioImg,
} from "../../assets/images"
import ActionItem from "./action-item"
import MovementItem from "./movement-item"

function Home() {
  return (
    <>
      <Navbar title={"Home"} backIcon={false} />
      <div className="wrapper-home">
        <div className="info-section">
          <div className="home-title">
            Mi saldo:{" "}
            <span>
              {(100000).toLocaleString("es-ar", {
                style: "currency",
                currency: "ars",
              })}
            </span>
          </div>
          <div className="home-title">
            Mi accion:{" "}
            <select name="" id="">
              <option value="0">Nombre de accion:</option>
            </select>
          </div>
        </div>

        <div className="action-subtitles">Acciones:</div>
        <div className="actions-home">
          <ActionItem title="cargar saldo" img={CargarSaldoImg} />
          <ActionItem title="enviar premio" img={EnviarPremioImg} />{" "}
          <ActionItem title="movimientos" img={MovimientosImg} />{" "}
          <ActionItem title="ajustes" img={AjustesImg} />
        </div>

        <div className="action-subtitles">Ultimos movimientos</div>

        <div className="last-movements">
          <MovementItem
            type={"income"}
            title={"Carga de saldo"}
            amount={10000000}
            date={"21/01"}
          />
          <MovementItem
            type={"output"}
            title={"Envio de premio"}
            amount={2500000}
            date={"19/01"}
          />
          <MovementItem
            type={"output"}
            title={"Envio de premio"}
            amount={2500000}
            date={"18/01"}
          />{" "}
          <MovementItem
            type={"output"}
            title={"Envio de premio"}
            amount={2500000}
            date={"18/01"}
          />
          <MovementItem
            type={"income"}
            title={"Carga de saldo"}
            amount={75000000}
            date={"17/01"}
          />{" "}
        </div>
      </div>
    </>
  )
}

export default Home
