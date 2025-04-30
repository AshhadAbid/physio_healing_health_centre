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
          <Route path="/Physicaltherapy" element ={<Physicaltherapy/>} />


        </Routes>
      </main>
      <WhatsappButton/>
      <Footer />
    </Router>
  );
};




export default App;

