import react from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/products" />
        <Route path="/content" />
        <Route path="/about" />
      </Routes>
    </Router>
  );
}

export default App;
