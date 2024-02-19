import "./App.css";
//import MainLayout from './Components/Layouts/MainLayout'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layouts/Mainarea";
import Dashboard from "./pages/Dashboard";
import Operators from "./pages/Operators";
import Sites from "./pages/Sites";
import Plants from "./pages/Plants";
import Workshops from "./pages/Workshops";
import Stores from "./pages/Stores";
import Breakdowns from "./pages/Breakdowns";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/operators" element={<Operators />} />
            <Route path="/sites" element={<Sites />} />
            <Route path="/plants" element={<Plants />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/stores" element={<Stores />} />
            <Route path="/breakdowns" element={<Breakdowns />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
