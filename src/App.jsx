
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Jewellery from "./pages/Jewellery/Jewellery.jsx";
import Collections from "./pages/Jewellery/Collections.jsx";


function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
            <Route path="/Jewellery" element={<Jewellery/>} />
            <Route path="/Collections" element={<Collections/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;