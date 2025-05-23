
import Navbar from "./_components/navbar";
import Banner from "./_components/banner";
import AboutMe from "./_components/about-me";

export default function Home() {
  return (
    <div className="bg-[#151414]">
      <Navbar />
      <Banner />
      <AboutMe />
    </div>
  );
}
