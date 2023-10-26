import { FunctionComponent } from "react";
import PrimaryColorCard from "../components/PrimaryColorCard";
import SecondaryColorCard from "../components/SecondaryColorCard";
import ColorContainer from "../components/ColorContainer";
import InterfaceColorsContainer from "../components/InterfaceColorsContainer";

const Page3Colors: FunctionComponent = () => {
  return (
    <div className="relative bg-primary-background w-full flex flex-col items-start justify-end">
      <header className="bg-primary-main box-border w-[120rem] h-[25.09rem] overflow-hidden shrink-0 flex flex-col items-start justify-end p-[6.25rem] text-left text-[7.5rem] text-primary-contrast-text font-body1 border-b-[3px] border-solid border-grey-grey-300">
        <h1 className="m-0 relative text-inherit tracking-[0.15px] leading-[150%] font-semibold font-inherit">
          Colors
        </h1>
      </header>
      <section
        className="bg-primary-background box-border w-[120rem] h-[67.59rem] overflow-hidden shrink-0 flex flex-row items-start justify-start p-[6.25rem] gap-[6.25rem] border-b-[3px] border-solid border-grey-grey-300"
        id="colos-1"
      >
        <PrimaryColorCard />
        <SecondaryColorCard />
      </section>
      <ColorContainer />
      <InterfaceColorsContainer />
    </div>
  );
};

export default Page3Colors;
