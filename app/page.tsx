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
      <Navbar />
      <CircleFollowCursor />
      <div className="backdrop-blur-3xl bg-opacity-15 bg-slate-500">
        <Hero />
        <Experiences />
        <Works />
        <Profile />
        <Testimony />
      </div>
    </>
  );
}
