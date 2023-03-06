import Acredit from "./screens/acredit"
import Auth from "./screens/auth"
import Home from "./screens/home"
import VerificationCode from "./screens/verificationCode"
import Awards from "./screens/awards"
import NotFound from "./screens/notFound"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { PrivateRoute } from "./privateRoutes"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Auth />} />
          <Route path="/verification" element={<VerificationCode />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/acredit"
            element={
              <PrivateRoute>
                <Acredit />
              </PrivateRoute>
            }
          />{" "}
          <Route
            path="/awards"
            element={
              <PrivateRoute>
                <Awards />
              </PrivateRoute>
            }
          />{" "}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
