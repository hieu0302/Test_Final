import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Page/Home/home";
import NavBar from "./Component/NavBar/navBar";
import Active from "./Page/Active/active";
import Completed from "./Page/Completed/completed";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/active" element={<Active />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
