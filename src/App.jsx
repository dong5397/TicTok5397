import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header";
import Intord from "./pages/Intord";
import Submit from "./pages/Submit";
import Question from "../src/pages/Question";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Intord" element={<Intord />} />
        <Route path="/Submit" element={<Submit />} />
        <Route path="/Question" element={<Question />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
