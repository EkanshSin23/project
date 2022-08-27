import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Dashboard from './pages/dashboard/Dashboard'
import { Profiler } from "react";
import Profile from "./pages/dashboard/dashboardpages/profile/Profile";
import Joboffer from "./pages/dashboard/dashboardpages/joboffer/Joboffer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />


        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/managejob" element={<Joboffer />} />



      </Routes>
    </>
  );
}

export default App;
