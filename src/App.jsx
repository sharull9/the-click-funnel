import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Clients from "./Components/Clients";
import About from "./Pages/About";
import CaseStudies from "./Pages/CaseStudies";
import Process from "./Components/ProcessSection";
import Services from "./Pages/Services";
import GetInTouch from "./Pages/GetInTouch";
import Footer from "./Components/Footer";
import InfiniteScrollStrips from "./Components/InfiniteScrollStrips";
// import Preloader from "./Reusable/Preloader";
import CustomCursor from "./Reusable/CustomCursor";
import ImpactAndTestimonials from "./Pages/ImpactAndTestimonials";
import IndustriesServed from "./Pages/IndustriesServed";

function App() {
  // const [loading, setLoading] = useState(true); 

  return (
    <div>
       <CustomCursor />
      {/* {loading && <Preloader onComplete={() => setLoading(false)} />}
      {!loading && ( */}
        <>
          <Navbar />
          <section id="/">
          <Home />
          </section>
          <Clients />
         <section id="about">
            <About />
          </section>

          <InfiniteScrollStrips />
                    
          <Process />
          <section id="services">
            <Services />
          </section>


          {/* <section id="casestudies">
            <CaseStudies />
          </section> */}

          <section id="industries">
          <IndustriesServed />
          </section>

          <ImpactAndTestimonials />
        
          {/* <SpotifyInspiration /> */}
            <GetInTouch />
          <Footer />
        </>
      {/* )} */}
    </div>
  );
}

export default App;
