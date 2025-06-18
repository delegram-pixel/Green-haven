import Image from "next/image";
import Header from "./components/header/page";
import Services from "./components/services/page";
import WhyChooseUs from "./components/why-choose-us/page";
import Feedback from "./components/feedback/page";
import StandOut from "./components/stand-out/page";
import Footer from "./components/footer/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-white"> <Header /></section>
      <section> <Services /></section>
      <section className="bg-[#f0f4f3]"> <WhyChooseUs /></section>
      <section> <Feedback /></section>
      <section className="bg-white"> <StandOut /></section>
      <section id="Footer"> <Footer /></section>





    </div>
  );
}
