import Cartlist from "./Cartlist";
import "./index.css";
import Mouse from "./Mouse";
import Pagenotfound from "./Page404";
import Products from "./Product";
import { BrowserRouter,Routes,Route } from "react-router";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Mouse/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/cart" element={<Cartlist/>}/>
      <Route path="*" element={<Pagenotfound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
