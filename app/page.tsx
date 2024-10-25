import Experiences from "@/components/Experiences";
import Hero from "@/components/Hero";
import CircleFollowCursor from "@/components/ui/Circle";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <CircleFollowCursor />
      <div className="backdrop-blur-3xl bg-opacity-5 px-20">
        <Hero />
        <Experiences/>
      </div>
    </>
  );
}
