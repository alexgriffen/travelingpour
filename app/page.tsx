import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Testimonials from "@/components/sections/Testimonials";
import ThePitch from "@/components/sections/ThePitch";
import HowItWorks from "@/components/sections/HowItWorks";
import WhatsIncluded from "@/components/sections/WhatsIncluded";
import HomeGallery from "@/components/sections/HomeGallery";
import BookingBanner from "@/components/sections/BookingBanner";
import InstagramSection from "@/components/sections/InstagramSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Testimonials />
      <ThePitch />
      <HowItWorks />
      <WhatsIncluded />
      <HomeGallery />
      <BookingBanner />
      <InstagramSection />
    </>
  );
}
