import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import SingleCocktail from "./pages/SingleCocktail";

// import components
import Navbar from "./components/Navbar";


function App() {
  // create router: Navbar always showing, Routes working as Switch (important order in which Route elements are following)
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/cocktail/:id" element={<SingleCocktail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
