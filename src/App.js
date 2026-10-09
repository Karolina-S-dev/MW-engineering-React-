import { Route, Routes } from "react-router-dom";
import "./assets/css/index.css";
import "./assets/css/queries.css";
import HomeScreen from "./components/HomeScreen";
import AboutScreen from "./components/AboutScreen";
import ProjectsScreen from "./components/ProjectsScreen";
import ContactScreen from "./components/ContactScreen";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about-company" element={<AboutScreen />} />
        <Route path="/projects" element={<ProjectsScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </>
  );
}

export default App;
