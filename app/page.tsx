import Experiences from "@/components/Works";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Testimony from "@/components/Testimony";
import CircleFollowCursor from "@/components/ui/Circle";
import Navbar from "@/components/ui/Navbar";
import Works from "@/components/Experiences";

export default function Home() {
  return (
    <>
      <Navbar />
      <CircleFollowCursor />
      <div className="backdrop-blur-md bg-opacity-50">
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
