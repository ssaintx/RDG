import { Footer } from "@/components/shared/Footer";
import { AboutUs } from "@/components/pages/AboutUs";
import { Navbar } from "@/components/shared/Navbar";

const Page = () => {
    return (
        <>
            <Navbar />
            <AboutUs />
            <Footer />
        </>
    );
};

export default Page;