import Acredit from "./screens/acredit"
import Auth from "./screens/auth"
import Home from "./screens/home"
import VerificationCode from "./screens/verificationCode"
import Awards from "./screens/awards"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NotFound from "./screens/notFound"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/acredit" element={<Acredit />} />{" "}
          <Route path="/awards" element={<Awards />} />{" "}
          <Route path="/verification" element={<VerificationCode />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
