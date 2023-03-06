import React, { useEffect, useState } from "react"
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
import Loading from "../../components/Loading"

function Home() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  })
  return (
    <>
      <Navbar title={"¡Hola Test!"} backIcon={false} />
      {loading ? (
        <div className="wrapper-loading">
          <Loading />
        </div>
      ) : (
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
                Mi acción:{" "}
                <select name="">
                  <option value="0">Nombre de Acción</option>
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
          <div className="end-home">
            <div className="action-subtitles">Últimos Movimientos</div>
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
      )}
    </>
  )
}

export default Home
