import Experiences from "@/components/Experiences";
import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Testimony from "@/components/Testimony";
import CircleFollowCursor from "@/components/ui/Circle";
import Navbar from "@/components/ui/Navbar";
import Works from "@/components/Works";

export default function Home() {
  return (
    <>
      <video src={require('@/public/videos/bgVideo3.mp4')} autoPlay muted loop className="fixed object-cover z-[-2] h-screen w-screen brightness-200 grayscale"/>
      <Navbar />
      <CircleFollowCursor />
      <div className="backdrop-blur-md bg-opacity-50">
        <Hero />
        <Experiences />
        <Works />
        <Profile />
        <Testimony />
      </div>
    </>
  );
}
