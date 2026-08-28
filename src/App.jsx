
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Jewellery from "./pages/Jewellery/Jewellery.jsx";


function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
            <Route path="/Jewellery" element={<Jewellery/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;