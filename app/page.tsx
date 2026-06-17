import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Departments from "@/components/Departments";
import About from "@/components/About";
import Doctors from "@/components/Doctors";
import Testimonials from "@/components/Testimonials";
import Appointment from "@/components/Appointment";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main>
   <Navbar />

<Hero />

<About />

<Departments />

<WhyChooseUs />

<Doctors />

<Stats />

<Testimonials />

<FAQ />

<Contact />

<Appointment />

<Footer />
    </main>
  );
}