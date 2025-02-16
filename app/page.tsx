import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Testimony from "@/components/Testimony";
import Navbar from "@/components/ui/Navbar";
import Works from "@/components/Works";

export default function Home() {
  return (
    <div className="bg-blue-900 opacity-85">
      <Navbar />
      <div className="overflow-x-hidden">
        <Hero />
        <Works />
        <Experiences />
        <Profile />
        <Testimony />
        <Footer />
      </div>
    </div>
  );
}
