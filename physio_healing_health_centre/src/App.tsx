import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TopBar from "./components/TopBar";
import WellnessTips from "./pages/WellnessTips";
import Services from "./pages/Services";
import Physicaltherapy from "./pages/service_pages/Physicaltherapy";
import WhatsappButton from "./components/Whatsappbutton";
import CardiacRehabilition from "./pages/service_pages/CardiacRehabilition";
import CerebalPalsy from "./pages/service_pages/CerebalPalsy";
import ChestTherapy from "./pages/service_pages/ChestTherapy";
import Chiropractic from "./pages/service_pages/Chiropractic";
import FacialPalsyBellsPalsy from "./pages/service_pages/FacialPalsyBellsPalsy";
import FrozenShoulderNerveCompression from "./pages/service_pages/FrozenShoulderNerveCompression";
import JointMuscleRecovery from "./pages/service_pages/JointMuscleRecovery";
import KneeAnklePain from "./pages/service_pages/KneeAnklePain";
import Osteoarthritis from "./pages/service_pages/Osteoarthritis";
import PainManagement from "./pages/service_pages/PainManagement";
import PostSurgeryStroke from "./pages/service_pages/PostSurgeryStroke";
import PosturalAlignment from "./pages/service_pages/PosturalAlignment";
import RheumatoidArthritis from "./pages/service_pages/RheumatoidArthritis";
import SportsInjuries from "./pages/service_pages/SportsInjuries";
import Tendititis from "./pages/service_pages/Tendititis";

const App = () => {
  return (
    <Router>
      <Header />
      <TopBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/WellnessTips" element={<WellnessTips />} />
          <Route path="/CardiacRehabilition" element ={<CardiacRehabilition/>} />
          <Route path="/CerebalPalsy" element ={<CerebalPalsy/>} />
          <Route path="/ChestTherapy" element ={<ChestTherapy/>} />
          <Route path="/Chiropractic" element ={<Chiropractic/>} />
          <Route path="/FacialPalsyBellsPalsy" element ={<FacialPalsyBellsPalsy/>} />
          <Route path="/FrozenShoulderNerveCompression" element ={<FrozenShoulderNerveCompression/>} />
          <Route path="/JointMuscleRecovery" element ={<JointMuscleRecovery/>} />
          <Route path="/KneeAnklePain" element ={<KneeAnklePain/>} />
          <Route path="/Osteoarthritis" element ={<Osteoarthritis/>} />
          <Route path="/PainManagement" element ={<PainManagement/>} />
          <Route path="/PostSurgeryStroke" element ={<PostSurgeryStroke/>} />
          <Route path="/PosturalAlignment" element ={<PosturalAlignment/>} />
          <Route path="/RheumatoidArthritis" element ={<RheumatoidArthritis/>} />
          <Route path="/SportsInjuries" element ={<SportsInjuries/>} />
          <Route path="/Tendititis" element ={<Tendititis/>} />


        </Routes>
      </main>
      <WhatsappButton/>
      <Footer />
    </Router>
  );
};




export default App;

