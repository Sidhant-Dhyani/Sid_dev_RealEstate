import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Best from "./components/best/Best";
import Featured from "./components/featured/Featured";
import Footer from "./components/footer/Footer";
import Error from "./components/error/error";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
function App() {
  return (
    <>
      {/* <Router>
        
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
        <Routes>
          <Route path="/best" element={<Best />} />
        </Routes>
        <Routes>
          <Route path="/featured" element={<Featured />} />
        </Routes>
        <Routes>
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Router> */}
      <Navbar />
      <Hero/>
      <Best/>
      <Featured/>
      <Footer/>
    </>
  );
}

export default App;