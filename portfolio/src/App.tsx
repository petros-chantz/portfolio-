import { Routes, Route } from "react-router-dom";
import About from "./pages/about/About";

import Home from "./pages/home/Home";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes> */}
      <Home></Home>
      <About></About>
    </>
  );
}

export default App;
