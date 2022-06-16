import { Routes, Route } from "react-router-dom";
import About from "./pages/about/About";

import Home from "./pages/home/Home";
import Vision from "./pages/vision/Vision";
import Work from "./pages/work/Work";

const App = () => {
  return (
    <>
      <Home />
      <About />
      <Work />
    </>
  );
};

export default App;
