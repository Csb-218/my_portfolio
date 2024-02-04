import { useEffect } from "react";
import { Inter } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/LandingHero/Hero";
import AboutMe from "@/components/LandingHero/AboutMe";
import Projects from "@/components/LandingHero/Projects";
import Contact from "@/components/LandingHero/Contact";
import Footer from "@/components/footer/Footer";
import { useNav } from "@/context/NavContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const {scroll,section,page} = useNav()

  useEffect(() => {

      console.log(scroll)

      window.scrollTo(0,scroll)
      
  }, [scroll,page,section])

  return (
    <>

      <div className={`h-screen w-screen fixed bg-center bg-no-repeat bg-cover bg-blend-multiply bg-[url('/bg1.jpg')]`}>
       
      </div>

      <div className=''>

        <Hero />
        <AboutMe />
        <Projects />
        
        <Contact />
        <Footer />
        
      </div>
        
    </>

  );
}
