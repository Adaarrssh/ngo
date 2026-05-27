import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Stories from "./pages/Stories";
import Volunteer from "./pages/Volunteer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
