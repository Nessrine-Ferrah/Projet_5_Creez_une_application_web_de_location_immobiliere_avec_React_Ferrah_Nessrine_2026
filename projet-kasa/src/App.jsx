import { Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import About from "./page/About/About.jsx"
import Error from "./page/Error/Error.jsx"
import Home from "./page/Home/Home.jsx"
import FicheLogement from "./page/FicheLogement/FicheLogement.jsx"


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<FicheLogement />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App