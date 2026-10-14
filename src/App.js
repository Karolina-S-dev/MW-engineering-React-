import { Route, Routes } from "react-router-dom";
import "./assets/css/index.css";
import "./assets/css/queries.css";
import HomeScreen from "./components/HomeScreen";
import AboutScreen from "./components/AboutScreen";
import ProjectsScreen from "./components/ProjectsScreen";
import ContactScreen from "./components/ContactScreen";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { Flip, ToastContainer } from "react-toastify";

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

      <ToastContainer
        toastStyle={{
          minHeight: "60px",
        }}
        transition={Flip}
        closeOnClick
        newestOnTop
        style={{ top: "40px" }}
      />
    </>
  );
}

export default App;
