
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Jewellery from "./pages/Jewellery/Jewellery.jsx";
import Collections from "./pages/Collections/Collections.jsx";
import CollectionDetails from "./pages/Collections/CollectionDetails";


function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
            <Route path="/Jewellery" element={<Jewellery/>} />
            <Route path="/Collections" element={<Collections/>}/>
            <Route path="/collections/:type" element={<CollectionDetails />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;