import react from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import ProfilePic from "./components/ProfilePic";
import Work from "./components/Work";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/projects" />
        <Route path="/about" />
      </Routes>
      <ProfilePic />
      <Work />
    </Router>
  );
}

export default App;
