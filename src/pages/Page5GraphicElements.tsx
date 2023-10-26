import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

const Page5GraphicElements: FunctionComponent = () => {
  return (
    <div className="relative bg-primary-background w-full flex flex-col items-start justify-start text-left text-[3.5rem] text-bldai-text-secondary font-h1">
      <header className="self-stretch bg-primary-main box-border h-[12.59rem] overflow-hidden shrink-0 flex flex-row items-center justify-between p-[6.25rem] text-left text-[3.75rem] text-primary-contrast-text font-h1 border-b-[3px] border-solid border-grey-grey-300">
        <div className="self-stretch flex flex-row items-center justify-start gap-[3.13rem]">
          <img
            className="relative w-[3.13rem] h-[3.13rem]"
            alt=""
            src="/logoprimary1.svg"
          />
          <h1 className="m-0 relative text-inherit tracking-[0.5px] leading-[112%] font-semibold font-inherit">
            Graphic Elements
          </h1>
        </div>
        <NavigationBar
          line="/line1.svg"
          line1="/line1.svg"
          line2="/line1.svg"
          line3="/line1.svg"
          line4="/line6.svg"
          line5="/line1.svg"
          navigationBarWidth="50rem"
          tabHeight="1.88rem"
          tabMinHeight="1.88rem"
          tabCursor="pointer"
          tabTextDecoration="none"
          mainGap="0.31rem"
          tabContentFontSize="0.94rem"
          lineIconHeight="0rem"
          tabHeight1="1.88rem"
          tabMinHeight1="1.88rem"
          tabCursor1="pointer"
          tabTextDecoration1="none"
          mainGap1="0.31rem"
          tabContentFontSize1="0.94rem"
          lineIconHeight1="0rem"
          tabHeight2="1.88rem"
          tabMinHeight2="1.88rem"
          tabCursor2="pointer"
          tabTextDecoration2="none"
          mainGap2="0.31rem"
          tabContentFontSize2="0.94rem"
          lineIconHeight2="0rem"
          tabHeight3="1.88rem"
          tabMinHeight3="1.88rem"
          tabCursor3="pointer"
          tabTextDecoration3="none"
          mainGap3="0.31rem"
          tabContentFontSize3="0.94rem"
          lineIconHeight3="0rem"
          tabHeight4="1.88rem"
          tabMinHeight4="1.88rem"
          tabCursor4="unset"
          tabTextDecoration4="unset"
          mainGap4="0.31rem"
          tabContentFontSize4="0.94rem"
          lineIconHeight4="0.13rem"
          tabHeight5="1.88rem"
          tabMinHeight5="1.88rem"
          tabCursor5="pointer"
          tabTextDecoration5="none"
          mainGap5="0.31rem"
          tabContentFontSize5="0.94rem"
          lineIconHeight5="0rem"
        />
      </header>
      <div className="relative bg-primary-background box-border w-[120rem] h-[67.59rem] overflow-hidden shrink-0 border-b-[3px] border-solid border-bluegrey-300">
        <img
          className="absolute h-[79.54%] w-[89.68%] top-[4.29%] right-[4.54%] bottom-[16.17%] left-[5.78%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group.svg"
        />
        <div className="absolute top-[7.94rem] left-[6.31rem] tracking-[-1.5px] leading-[112%] font-semibold">
          Graphic elements - isometric cubes
        </div>
      </div>
      <div className="relative bg-primary-background box-border w-[120rem] h-[67.59rem] overflow-hidden shrink-0 border-b-[3px] border-solid border-bluegrey-300">
        <img
          className="absolute top-[21.94rem] left-[10.19rem] w-[23.69rem] h-[23.69rem] overflow-hidden"
          alt=""
          src="/frame3.svg"
        />
        <img
          className="absolute top-[23.06rem] left-[50.44rem] w-[21.75rem] h-[21.38rem]"
          alt=""
          src="/group-2365.svg"
        />
        <img
          className="absolute top-[23.25rem] left-[88.75rem] w-[21rem] h-[21rem]"
          alt=""
          src="/group-2366.svg"
        />
        <div className="absolute top-[7.94rem] left-[6.31rem] tracking-[-1.5px] leading-[112%] font-semibold">
          Graphic elements - variations
        </div>
      </div>
    </div>
  );
};

export default Page5GraphicElements;
