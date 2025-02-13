import { Footer } from "@/components/shared/Footer";
import { GPTs } from "@/components/pages/GPTs";
import { Navbar } from "@/components/shared/Navbar";

const Page = () => {
    return (
        <>
            <Navbar />
            <GPTs />
            <Footer />
        </>
    );
};

export default Page;