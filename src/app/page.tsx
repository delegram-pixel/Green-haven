import Header from "./header/page";
import Services from "./services/page";
import WhyChooseUs from "./why-choose-us/page";
import Feedback from "./feedback/page";
import StandOut from "./stand-out/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-white"> <Header /></section>
      <section> <Services /></section>
      <section className="bg-[#f0f4f3] mt-96 md:mt-0"> <WhyChooseUs /></section>
      <section> <Feedback /></section>
      <section className="bg-white"> <StandOut /></section>
      <section id="Footer"> <Footer /></section>





    </div>
  );
}
