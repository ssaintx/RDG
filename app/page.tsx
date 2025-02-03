// HOME PAGE
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/shared/Navbar";
import { AboutProduct } from "@/components/sections/AboutProduct";
import { InfoPanel } from "@/components/sections/InfoPanel";
import { ConnectGPT } from "@/components/sections/ConnectGPT";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutProduct />
      <InfoPanel />
      <ConnectGPT />
    </>
  );
};

export default HomePage;