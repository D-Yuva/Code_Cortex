import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Predict from "./pages/Predict.jsx";
import Result from "./pages/Result.jsx";

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen">
        <Navbar />
        <div className="container mx-auto py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/predict" element={<Predict />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
