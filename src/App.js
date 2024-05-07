import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import SimuBase from "./components/SimuBase";
// import Main from "./components/Main";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/doc" element={<SimuBase />} />
        </Routes>
      </BrowserRouter> */}

      {/* <Main /> */}
      <SimuBase />
    </>
  );
}

export default App;
