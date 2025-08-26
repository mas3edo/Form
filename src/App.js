import { useEffect } from "react";
import {
  useLocation,
  useNavigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Profile from "./context/profile";
import SchoolInformation from "./context/schoolinformation";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free";

function RedirectOnLoad() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/") {
      navigate("/"); // أي reload على صفحة فرعية هيرجع للصفحة الرئيسية
    }
  }, []);

  return null; // مفيش UI هنا
}

function App() {
  return (
    <Router>
      <RedirectOnLoad />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/school-information" element={<SchoolInformation />} />
      </Routes>
    </Router>
  );
}

export default App;
