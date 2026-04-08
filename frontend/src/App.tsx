import { Route, Routes } from "react-router-dom"
import { PreciosPage } from "./pages/PreciosPage"

function App() {
    return (
      <>
        <Routes>
          <Route path="precio" element={<PreciosPage/>}/>    
        </Routes>
      </>
  )
}

export default App
