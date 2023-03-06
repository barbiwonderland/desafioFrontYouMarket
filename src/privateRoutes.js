import { Navigate } from "react-router-dom"

export function PrivateRoute({ children }) {
  //defino que es true la auth pero esto deberia venir de la respuesta de la api
  const auth = true
  return auth ? children : <Navigate to="/" />
}
