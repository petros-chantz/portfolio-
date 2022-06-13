import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./pages/about/About";

import Home from "./pages/home/Home";
import Vision from "./pages/vision/Vision";
import Work from "./pages/work/Work";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes> */}
      <Home></Home>
      {/* <About></About> */}
      {/* <Work></Work>
      <Vision></Vision>
      <Footer></Footer> */}
    </>
  );
}

export default App;
