// HOME PAGE
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/shared/Navbar";
import { AboutProduct } from "@/components/sections/AboutProduct";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutProduct />
    </>
  );
};

export default HomePage;