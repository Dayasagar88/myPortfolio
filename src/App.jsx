import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import CaseStudy from "./components/CaseStudy";
import ParticlesBg from "./components/ui/ParticlesBg";

function App() {
  return (
    <div className="relative w-full h-full min-h-screen overflow-hidden">
    {/* Background Particles */}
    <div className="absolute top-0 left-0 w-full h-full inset-0 -z-10">
      <ParticlesBg />
    </div>

    {/* Router and Routes */}
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="case-study/:id/:title" element={<CaseStudy />} />
        </Route>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
