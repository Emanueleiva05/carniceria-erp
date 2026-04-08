import { Route, Routes } from "react-router-dom"
import { PreciosPage } from "./pages/PreciosPage"
import { OfertaPage } from "./pages/OfertasPage"

function App() {
    return (
      <>
        <Routes>
          <Route path="precio" element={<PreciosPage/>}/>
          <Route path="oferta" element={<OfertaPage/>}/>    
        </Routes>
      </>
  )
}

export default App
