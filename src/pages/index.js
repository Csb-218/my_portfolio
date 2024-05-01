import { useEffect } from "react";
import { Inter } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/LandingHero/Hero";
import AboutMe from "@/components/LandingHero/AboutMe";
import Projects from "@/components/LandingHero/Projects";
import Contact from "@/components/LandingHero/Contact";
import Footer from "@/components/footer/Footer";
import { useNav } from "@/context/NavContext";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home({projects}) {

  const router = useRouter()

  const {scroll,section,page} = useNav()

  useEffect(() => {

      console.log(scroll)

      window.scrollTo(0,scroll)

  }, [scroll,page,section])

  return (
    <>

      <div className={`h-screen w-screen overflow-scroll lg:pt-0 pt-20 fixed bg-center bg-no-repeat bg-cover bg-blend-multiply bg-[url('/backgrounds/bg1.jpg')]`}>
       
      </div>
        <Hero />
        <AboutMe />
        <Projects projects={projects} />
        <Contact />
        <Footer />

    </>

  );
}

export async function getStaticProps() {

  const { projects } = await import("../../data/projects.json")
  
  const selected_projects = [projects[0],projects[1],projects[2]]

  return {
      props: {
          projects: selected_projects
      }
  }

}
