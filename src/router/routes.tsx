import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import TabuQuebrado01 from "@/pages/LP01";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lp01" element={<TabuQuebrado01 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
