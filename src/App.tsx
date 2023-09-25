import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes";
import About from "./routes/About";
import CardBody from "./routes/CardBody";
import NotFound from "./routes/NotFound";
import Products from "./routes/Products";
import Books from "./routes/Products/Books";
import Computers from "./routes/Products/Computers";
import Eletronics from "./routes/Products/Eletronics";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/home" />} />
            <Route path="home" element={<CardBody />} />
                <Route path="products" element={<Products />}>
                  <Route path="computers" element={<Computers/>}/>
                  <Route path="eletronics" element={<Eletronics/>}/>
                  <Route path="books" element={<Books/>}/>
                </Route>
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}