


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Accueil from "./pages/Accueil";
import PresentationPage from "./pages/Presentation";
import ServicesPage from "./pages/Services";
import RealisationPage from "./pages/Realisation";
import CvPage from "./pages/Cv";
import CompetencesPage from "./pages/Competences";
import ContactPage from "./pages/Contact";



const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/presentation" element={<PresentationPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/realisations" element={<RealisationPage />} />
            <Route path="/cv" element={<CvPage />} />
            <Route path="/competences" element={<CompetencesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        
      </BrowserRouter>
    </div>
  );
};

export default App;
