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
import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate()
  return (
    <>
      <Navbar title={"Hola Test!"} backIcon={false} />
      <div className="wrapper-home">
        <div className="">
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
              <select name="">
                <option value="0">Nombre de accion:</option>
              </select>
            </div>
          </div>

          <div className="action-subtitles">Acciones:</div>
          <div className="actions-home">
            <ActionItem
              title="cargar saldo"
              img={CargarSaldoImg}
              func={() => navigate("/acredit")}
            />
            <ActionItem
              title="enviar premio"
              img={EnviarPremioImg}
              func={() => navigate("/awards")}
            />{" "}
            <ActionItem title="movimientos" img={MovimientosImg} />{" "}
            <ActionItem title="ajustes" img={AjustesImg} />
          </div>
        </div>
        <div className="">
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
      </div>
    </>
  )
}

export default Home
