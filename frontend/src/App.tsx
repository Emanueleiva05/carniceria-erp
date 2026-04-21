import { Route, Routes } from "react-router-dom";
import { PreciosPage } from "./pages/PreciosPage/PreciosPage";
import { OfertaPage } from "./pages/OfertaPage/OfertasPage";
import RootLayout from "./pages/RootLayout/RootLayout";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFount/NotFound";
import ProductosPage from "./pages/ProductosPage/ProductosPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="productos" element={<ProductosPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="precio" element={<PreciosPage />} />
        <Route path="oferta" element={<OfertaPage />} />
      </Routes>
    </>
  );
}

export default App;
