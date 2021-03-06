import react from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/NavBar";
import ProfilePic from "./components/ProfilePic";
import TextComponent from "./components/TextComponent";
import Work from "./components/Work";
import AboutMe from "./components/AboutMe";
import { WorkPageContainer } from "./styles/Work.style";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import WorkPage from "./pages/WorkPage";
import JavascriptPage from "./pages/WorkTypePages/JavascriptPage";
import LandingPage from "./pages/WorkTypePages/LandingPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/work" element={<WorkPage />} />
          <Route exact path="/about" element={<AboutMePage />} />
          <Route exact path="/js" element={<JavascriptPage />} />
          <Route exact path="/lp" element={<LandingPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
