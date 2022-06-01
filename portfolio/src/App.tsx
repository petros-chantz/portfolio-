import { Routes, Route } from "react-router-dom";
import About from "./about/About";

import Home from "./home/Home";

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
