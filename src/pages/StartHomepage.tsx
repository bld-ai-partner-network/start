import { FunctionComponent } from "react";
import Header from "../components/Header";
import BuildTogether from "../components/BuildTogether";
import GetStartedContainer from "../components/GetStartedContainer";
import CardContainer from "../components/CardContainer";
import Footer from "../components/Footer";

const StartHomepage: FunctionComponent = () => {
  return (
    <div className="relative w-full flex flex-col items-start justify-start">
      <Header />
      <BuildTogether />
      <section className="self-stretch bg-bldai-primary-main flex flex-col items-center justify-start py-[4.69rem] px-[10rem]">
        <GetStartedContainer />
        <CardContainer />
      </section>
      <Footer />
    </div>
  );
};

export default StartHomepage;
