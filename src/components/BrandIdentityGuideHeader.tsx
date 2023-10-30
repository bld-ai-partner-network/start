import { FunctionComponent, memo } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";

const BrandIdentityGuideHeader: FunctionComponent = memo(() => {
  return (
    <header className="bg-bldai-primary-main box-border w-[120rem] h-[12.59rem] overflow-hidden shrink-0 flex flex-row items-center justify-between p-[6.25rem] text-left text-[3.75rem] text-bldai-text-light-contrast font-bldai-special-overline border-b-[3px] border-solid border-bldai-monochrome-grey-300 lg:flex-row lg:gap-[0rem] lg:items-start lg:justify-start md:flex-col md:gap-[0rem] md:items-start md:justify-center sm:flex-col sm:gap-[0rem] sm:items-start sm:justify-center">
      <div className="self-stretch flex flex-row items-center justify-start gap-[3.13rem] lg:flex-row lg:gap-[3.13rem] lg:items-center lg:justify-start">
        <img
          className="relative w-[3.13rem] h-[3.13rem]"
          alt=""
          src="/logoprimary1.svg"
        />
        <div className="relative tracking-[0.5px] leading-[112%] font-semibold">
          Brand Identity Guide
        </div>
      </div>
      <NavigationBar
        line="/line2.svg"
        line1="/line1.svg"
        line2="/line1.svg"
        line3="/line1.svg"
        line4="/line1.svg"
        line5="/line1.svg"
        navigationBarWidth="50rem"
        tabHeight="1.88rem"
        tabMinHeight="1.88rem"
        tabCursor="unset"
        tabTextDecoration="unset"
        mainGap="0.31rem"
        tabContentFontSize="0.94rem"
        lineIconHeight="0.13rem"
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
        tabCursor4="pointer"
        tabTextDecoration4="none"
        mainGap4="0.31rem"
        tabContentFontSize4="0.94rem"
        lineIconHeight4="0rem"
        tabHeight5="1.88rem"
        tabMinHeight5="1.88rem"
        tabCursor5="pointer"
        tabTextDecoration5="none"
        mainGap5="0.31rem"
        tabContentFontSize5="0.94rem"
        lineIconHeight5="0rem"
      />
    </header>
  );
});

export default BrandIdentityGuideHeader;
