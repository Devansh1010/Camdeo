import CamdeoHero from "@/components/home/CamdeoHero";

import Footer from "@/components/home/Footer";
import About from "@/components/home/About";
import Partnerships from "@/components/home/Partnerships";
import Services from "@/components/home/Services";
import Founder from "@/components/home/Founder";
import Contact from "@/components/home/Contact";
import Learning from "@/components/home/Learning";
import Technologies from "@/components/home/Technologies";


export default function Home() {
  return (
    <div>
      <CamdeoHero />
      <Technologies/>
      <About/>
      <Partnerships/>
      <Services/>
      <Learning/>
      <Founder/>
      <Contact />
      <Footer />
    </div>
  );
}
