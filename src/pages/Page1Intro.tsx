import { FunctionComponent } from "react";
import BrandIdentityGuideHeader from "../components/BrandIdentityGuideHeader";

const Page1Intro: FunctionComponent = () => {
  return (
    <div className="relative bg-primary-background w-full flex flex-col items-start justify-start gap-[3.13rem]">
      <BrandIdentityGuideHeader />
      <main className="self-stretch bg-primary-background overflow-hidden flex flex-col items-start justify-start py-[7.94rem] pr-[0rem] pl-[6.31rem] gap-[5.38rem] text-left text-[3.5rem] text-primary-main font-h1 border-b-[3px] border-solid border-bluegrey-300">
        <div className="relative tracking-[-1.5px] leading-[112%] font-semibold">
          Contents
        </div>
        <section className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[2.63rem] text-left text-[3rem] text-text-primary font-h1">
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[0.06rem] shrink-0"
            alt=""
            src="/smarttabledivider.svg"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[2.5rem]">
            <div className="w-[16.31rem] h-[3.38rem] flex flex-row items-center justify-start gap-[6.13rem]">
              <div className="relative tracking-[-0.5px] leading-[112%] font-semibold">
                01
              </div>
              <div className="relative tracking-[-0.5px] leading-[112%] font-semibold">
                Logo
              </div>
            </div>
            <div className="w-[18.81rem] flex flex-row items-center justify-between">
              <div className="relative tracking-[-0.5px] leading-[112%] font-semibold">
                02
              </div>
              <div className="relative tracking-[-0.5px] leading-[112%] font-semibold">
                Colors
              </div>
            </div>
            <div className="w-[27.5rem] flex flex-row items-center justify-between">
              <div className="relative tracking-[-0.5px] leading-[112%] font-semibold">
                03
              </div>
              <div className="relative tracking-[-0.5px] leading-[112%] font-semibold">
                Typography
              </div>
            </div>
            <div className="w-[35.69rem] flex flex-row items-center justify-between">
              <div className="relative tracking-[-0.5px] leading-[112%] font-semibold">
                04
              </div>
              <div className="relative tracking-[-0.5px] leading-[112%] font-semibold">
                Graphic Elements
              </div>
            </div>
            <div className="w-[16.94rem] h-[3.38rem] flex flex-row items-center justify-start gap-[5.25rem]">
              <div className="relative tracking-[-0.5px] leading-[112%] font-semibold">
                05
              </div>
              <div className="relative tracking-[-0.5px] leading-[112%] font-semibold">
                Story
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page1Intro;
