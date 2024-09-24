import HeroSection from "./components/HeroSection";
import FeaturedCourses from "./components/FeaturedCourses";
import WhyChooseUs from "./components/WhyChooseUs";
import MusciSchoolTestimonials from "./components/TestimonialCards";
import UpcomingWebinars from "./components/UpcomingWebinars";
import Instructors from "./components/Instructors";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusciSchoolTestimonials />
      <UpcomingWebinars />
      <Instructors />
    </main>
  );
}
