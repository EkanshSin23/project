import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Dashboard from './pages/dashboard/Dashboard'

function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />

      </Routes>
    </>
  );
}

export default App;
