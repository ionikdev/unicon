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
    <main className="flex flex-col ">
      <div className=" bg-gradient-to-b from-yellow-500 to-transparent">
        <Navbar />
        <Header />
      </div>
      <div className="bg-gradient-to-b from-yellow-400 to-transparent">
        <Services />
      </div>
      <div className="m-10  lg:max-w-[800px] mx-auto">
        <p>
          Lorem ipsum dolor sit amet consectetur. Nec convallis nunc massa
          laoreet. Lorem ipsum dolor sit amet consecteturconsecteturconsectetur.
          Nec convallis nunc massa laoreet.Lorem ipsum dolor sit amet conse
        </p>
      </div>
      <div className="bg-gradient-to-b from-yellow-400 to-transparent">
        <About />
      </div>
      <Socials />
      <div className="bg-yellow-400 ">
        <Footer />
      </div>
    </main>
  );
}
