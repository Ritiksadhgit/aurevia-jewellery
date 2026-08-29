
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Jewellery from "./pages/Jewellery/Jewellery.jsx";
import Collections from "./pages/Collections/Collections.jsx";


function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
            <Route path="/Jewellery" element={<Jewellery/>} />
            <Route path="/Collections" element={<Collections/>}/>
            <Route path="/collections/bridal" element={<Bridal />} />
            <Route path="/collections/everyday" element={<Everyday />} />
            <Route path="/collections/wedding" element={<Wedding />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;