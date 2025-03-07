// HOME PAGE
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/shared/Navbar";
import { AboutProduct } from "@/components/sections/AboutProduct";
import { InfoPanel } from "@/components/sections/InfoPanel";
import { ConnectGPT } from "@/components/sections/ConnectGPT";
import { Commissions } from "@/components/sections/Commissions";
import { Features } from "@/components/sections/Features";
import { Team } from "@/components/sections/Team";
import { Cases } from "@/components/sections/Cases";
import { GetStarted } from "@/components/sections/GetStarted";
import { Footer } from "@/components/shared/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutProduct />
      <InfoPanel />
      <ConnectGPT />
      <Commissions />
      <Features />
      <Team />
      <Cases />
      <GetStarted />
      <Footer />
    </>
  );
};

export default HomePage;