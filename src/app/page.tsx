import { Hero } from "@/components/Hero";
import { EmergencyBanner } from "@/components/EmergencyBanner";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Specialties } from "@/components/Specialties";
import { Doctors } from "@/components/Doctors";
import { Facilities } from "@/components/Facilities";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <EmergencyBanner />
      <About />
      <Features />
      <Specialties />
      <Doctors />
      <Facilities />
      <Contact />
    </>
  );
}
