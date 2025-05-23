
import Navbar from "./_components/navbar";
import Banner from "./_components/banner";
import AboutMe from "./_components/about-me";
import WhatIDo from "./_components/what-i-do";
import BestProject from "./_components/best-project";
import Review from "./_components/review";

export default function Home() {
  return (
    <div className="bg-[#151414] ">
      <Navbar />
      <Banner />
      <AboutMe />
      <WhatIDo />
      <BestProject />
      <Review />
    </div>
  );
}
