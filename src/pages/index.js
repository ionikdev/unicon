import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Services from "@/components/Services";
import About from "@/components/About";
import Socials from "@/components/Socials";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col p-5 lg:p-24">
      <Navbar />
      <Header />
      <Services />
      <div className="m-10  lg:max-w-[800px] mx-auto">
        <p>
          Lorem ipsum dolor sit amet consectetur. Nec convallis nunc massa
          laoreet. Lorem ipsum dolor sit amet consecteturconsecteturconsectetur.
          Nec convallis nunc massa laoreet.Lorem ipsum dolor sit amet conse
        </p>
      </div>
      <About />
      <Socials />
      <Footer />
    </main>
  );
}
