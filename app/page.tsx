import AppointmentSection from "@/components/appointment-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/service-section";

export default function Home() {
  return (
    <div className=" bg-[#FAF8F1] p-0 !m-0">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AppointmentSection />
      <Footer />
    </div>
  );
}
