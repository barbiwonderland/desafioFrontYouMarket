import React from "react"
import { AgregarCuenta, SubirArchivo } from "../../assets/images"
import Button from "../../components/Button"
import Navbar from "../../components/Navbar"
import SearchBar from "../../components/searchBar"
import AccountItem from "./account-item"
import "./index.css"
function Awards() {
  return (
    <>
      <Navbar title={"A quien queres premiar?"} backIcon={true} />
      <div className="wrapper-awards">
        <div className="awards-actions">
          <div className="bold-subtitle">Nuevas cuentas</div>
          <button>
            <img src={AgregarCuenta} alt="" />
            <div className="">agregar cuenta</div>
          </button>
          <button>
            <img src={SubirArchivo} alt="" />
            <div className="">subir archivo</div>
          </button>
        </div>

        <div className="accounts-container">
          <SearchBar />
          <div className="align-start mt-5 award-subtitle ">Tus cuentas</div>
          <div className="account-wrapper"></div>
          <AccountItem
            title={"Cuenta 1"}
            email={"cuenta1@test.com.ar"}
            img={"C1"}
          />
          <AccountItem
            title={"Cuenta 2"}
            email={"cuenta2@test.com.ar"}
            img={"C2"}
          />{" "}
          <AccountItem
            title={"Cuenta 3"}
            email={"cuenta3@test.com.ar"}
            img={"C3"}
          />{" "}
          <AccountItem
            title={"Cuenta 3"}
            email={"cuenta3@test.com.ar"}
            img={"C3"}
          />{" "}
          <AccountItem
            title={"Cuenta 5"}
            email={"cuenta5@test.com.ar"}
            img={"C5"}
          />{" "}
          <AccountItem
            title={"Cuenta 6"}
            email={"cuenta6@test.com.ar"}
            img={"C6"}
          />{" "}
          <AccountItem
            title={"Cuenta 7"}
            email={"cuenta7@test.com.ar"}
            img={"C7"}
          />{" "}
        </div>
        <div className="align-end align-center">
          <Button color={"grey"} title={"continuar"} />
        </div>
      </div>
    </>
  )
}

export default Awards
