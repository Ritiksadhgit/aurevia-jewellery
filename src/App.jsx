
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Jewellery from "./pages/Jewellery/Jewellery.jsx";
import Collections from "./pages/Collections/Collections.jsx";
import CollectionDetails from "./pages/Collections/CollectionDetails";
import Cart from "./pages/Cart/Cart.jsx";
import Navbar from "./components/Navbar";
import Checkout from "./pages/Checkout/Checkout";

import CartProvider from "./Context/CartContext.jsx";


function App() {
  return (
    <>
    <CartProvider>
          
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element={<Home/>} />
            <Route path="/Jewellery" element={<Jewellery/>} />
            <Route path="/Collections" element={<Collections/>}/>
            <Route path="/Collections/:slug" element={<CollectionDetails />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
      </CartProvider>

    </>
  );
}

export default App;