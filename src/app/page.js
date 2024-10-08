// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Clients from "./clients";
import Skills from "./skills";
import Projects from "./projects.js";
import Testimonial from "./testimonial";
import PopularClients from "./popular-clients";
import ContactForm from "./contact-form";
import Resume from "./resume";
import { Roboto } from "next/font/google";
import Products from "@/components/products";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Portfolio() {
  return (
    <div className={` ${roboto.className} bg-[#eceff1]`}>
      <Navbar />
      <Clients />
      <Skills />
      {/* <Hero />   */}
      <img
        src="\Web-Image-creation.png"
        className="w-full max-h-[500px] h-auto mb-5"
        alt="girl image"
      />
      <Products />
      <Projects />
      {/* <Resume /> */}
      {/* <Testimonial /> */}
      {/* <PopularClients /> */}
      <ContactForm />
      {/* <Footer /> */}
    </div>
  );
}
