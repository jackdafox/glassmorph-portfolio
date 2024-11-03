import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Testimony from "@/components/Testimony";
import CircleFollowCursor from "@/components/ui/Circle";
import Navbar from "@/components/ui/Navbar";
import Works from "@/components/Works";

export default function Home() {
  return (
    <>
      <img
        src="/images/bgBlue.png"
        alt="hero-bg"
        className="fixed inset-0 z-[-1] object-cover w-full h-full"
      />
      <Navbar />
      <CircleFollowCursor />
      <div>
        <Hero />
        <Experiences />
        <Works />
        <Profile />
        <Testimony />
        <Footer />
      </div>
    </>
  );
}
