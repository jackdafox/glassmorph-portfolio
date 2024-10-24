import Hero from "@/components/Hero";
import CircleFollowCursor from "@/components/ui/Circle";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar /> 
      <CircleFollowCursor />
      <div
        className="backdrop-blur-3xl bg-opacity-5"
      > 
        <Hero />
      </div>
    </div>
  );
}
