import { Route, Routes } from "react-router-dom"
import { PreciosPage } from "./pages/PreciosPage/PreciosPage"
import { OfertaPage } from "./pages/OfertaPage/OfertasPage"
import RootLayout from "./pages/RootLayout/RootLayout"
import Home from "./pages/Home/Home"
import NotFound from "./pages/NotFount/NotFound"

function App() {
    return (
      <>
        <Routes>
          <Route path="/" element={<RootLayout/>}>
            <Route path="/home" element={<Home/>}/>
          </Route>
          <Route path="precio" element={<PreciosPage/>}/>
          <Route path="oferta" element={<OfertaPage/>}/> 
          <Route path="*" element={<NotFound/>}/>   
        </Routes>
      </>
  )
}

export default App
