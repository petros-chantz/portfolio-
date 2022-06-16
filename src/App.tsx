import { Routes, Route } from "react-router-dom";
import About from "./pages/about/About";

import Home from "./pages/home/Home";
import Vision from "./pages/vision/Vision";
import Work from "./pages/work/Work";

function App() {
  return (
    <>
      <Home></Home>
      <About></About>
      <Work></Work>
    </>
  );
}

export default App;
