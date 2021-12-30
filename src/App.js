import react from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import ProfilePic from "./components/ProfilePic";
import TextComponent from "./components/TextComponent";
import Work from "./components/Work";
import AboutMe from "./components/AboutMe";

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
      <TextComponent />
      <Work />
      <AboutMe />
    </Router>
  );
}

export default App;
