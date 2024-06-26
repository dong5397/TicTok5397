import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header";
import Apply from "./pages/Apply";
import Question from "../src/pages/MainQuestion";
import MainSend from "./pages/MainSend";
import MainHome from "./pages/MainHome";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/Apply" element={<Apply />} />
        <Route path="/Question" element={<Question />} />
        <Route path="/MainSend" element={<MainSend />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
