import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

const Page2Logo: FunctionComponent = () => {
  return (
    <div className="relative bg-primary-background w-full flex flex-col items-start justify-start text-left text-[3.5rem] text-bldai-text-secondary font-h1">
      <div className="self-stretch bg-primary-main box-border h-[12.59rem] overflow-hidden shrink-0 flex flex-row items-center justify-between p-[6.25rem] text-[3.75rem] text-primary-contrast-text border-b-[3px] border-solid border-grey-grey-300">
        <div className="self-stretch flex flex-row items-center justify-start gap-[3.13rem]">
          <img
            className="relative w-[3.13rem] h-[3.13rem]"
            alt=""
            src="/logoprimary1.svg"
          />
          <div className="relative tracking-[0.5px] leading-[112%] font-semibold">
            Logo
          </div>
        </div>
        <NavigationBar
          line="/line1.svg"
          line1="/line3.svg"
          line2="/line1.svg"
          line3="/line1.svg"
          line4="/line1.svg"
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
          tabCursor1="unset"
          tabTextDecoration1="none"
          mainGap1="0.31rem"
          tabContentFontSize1="0.94rem"
          lineIconHeight1="0.13rem"
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
      </div>
      <div className="bg-primary-background box-border w-[119.2rem] h-[93.34rem] overflow-hidden shrink-0 flex flex-col items-start justify-start p-[6.25rem] gap-[6.25rem] border-b-[3px] border-solid border-bluegrey-300">
        <div className="self-stretch flex flex-col items-start justify-start gap-[6.25rem]">
          <div className="relative tracking-[-1.5px] leading-[112%] font-semibold">{`Logo & Logotype`}</div>
          <div className="self-stretch flex flex-row items-center justify-center gap-[6.25rem]">
            <img
              className="relative w-[15.63rem] h-[15.63rem]"
              alt=""
              src="/logoprimary-with-minimum-spacing.svg"
            />
            <img
              className="relative w-[30.21rem] h-[12.5rem] overflow-hidden shrink-0"
              alt=""
              src="/logologotype-with-minimum-spacing.svg"
            />
          </div>
          <div className="relative text-[1.5rem] leading-[112%] text-text-primary flex items-center w-[101.94rem]">
            <span className="[line-break:anywhere] w-full">
              <span>{`The `}</span>
              <span className="font-semibold">{`logo `}</span>
              <span>{`is a square brace intersected by a vertical version of the word mark. The `}</span>
              <span className="font-semibold">{`logotype `}</span>
              <span>
                is a horizontal version of the wordmark, displayed alone.
                Generally, the logo should be preferred, with the logotype used
                more sparingly.
              </span>
            </span>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[6.25rem]">
          <div className="relative tracking-[-1.5px] leading-[112%] font-semibold">
            Logo spacing
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-[6.25rem]">
            <img
              className="relative w-[18.79rem] h-[18.79rem]"
              alt=""
              src="/logo-frame.svg"
            />
            <img
              className="relative w-[38.48rem] h-[18.79rem]"
              alt=""
              src="/logotype-frame.svg"
            />
          </div>
          <div className="relative text-[1.5rem] leading-[112%] text-text-primary flex items-center w-[101.94rem]">
            <span className="[line-break:anywhere] w-full">
              <p className="m-0">
                The logos should always be surrounded by at least a little
                negative space. The diagram above defines the minimum
              </p>
              <p className="m-0">
                amount of clear space needed, which is equivalent 50% of the
                x-height of the height of serifs in the logo text.
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="bg-primary-background box-border w-[120rem] h-[67.59rem] overflow-hidden shrink-0 flex flex-col items-start justify-start p-[6.25rem] gap-[6.25rem] border-b-[3px] border-solid border-bluegrey-300">
        <div className="relative tracking-[-1.5px] leading-[112%] font-semibold">
          Correct usage
        </div>
        <div className="self-stretch flex-1 flex flex-row items-center justify-between">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
            alt=""
            src="/primary-logo-example.svg"
          />
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
            alt=""
            src="/primary-logo-example1.svg"
          />
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
            alt=""
            src="/primary-logo-example2.svg"
          />
        </div>
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="flex-1 flex flex-col items-center justify-center">
            <img
              className="relative w-[18.94rem] h-[18.94rem]"
              alt=""
              src="/box.svg"
            />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <img
              className="relative w-[18.94rem] h-[18.94rem]"
              alt=""
              src="/box1.svg"
            />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <img
              className="relative w-[18.94rem] h-[18.94rem]"
              alt=""
              src="/box2.svg"
            />
          </div>
        </div>
        <div className="relative text-[1.5rem] leading-[112%] text-text-primary flex items-center w-[101.94rem]">
          Make sure that there is enough contrast between the logo and the
          background color. The “Stealth” variant is intended only for use in
          cases when the background clashes with the primary or light version.
        </div>
      </div>
      <div className="bg-primary-background box-border w-[120rem] h-[67.59rem] overflow-hidden shrink-0 flex flex-col items-start justify-start p-[6.25rem] gap-[6.25rem] text-[0.75rem] text-text-primary border-b-[3px] border-solid border-bluegrey-300">
        <div className="relative text-[3.5rem] tracking-[-1.5px] leading-[112%] font-semibold text-bldai-text-secondary">
          Incorrect usage
        </div>
        <div className="flex flex-row items-start justify-start gap-[3.13rem]">
          <div className="relative w-[31.56rem] h-[19.13rem]">
            <div className="absolute top-[18.38rem] left-[0.19rem] tracking-[0.5px] leading-[150%]">{`Do not change the spacing of the elements in the logo. `}</div>
            <img
              className="absolute top-[0rem] left-[0rem] w-[31.56rem] h-[17.75rem]"
              alt=""
              src="/frame-16.svg"
            />
          </div>
          <div className="relative w-[31.56rem] h-[19.13rem]">
            <div className="absolute top-[18.38rem] left-[0rem] tracking-[0.5px] leading-[150%]">{`Do not stretch, squish, or warp the logo in any way or form. `}</div>
            <img
              className="absolute top-[0rem] left-[0rem] w-[31.56rem] h-[17.75rem]"
              alt=""
              src="/frame-17.svg"
            />
          </div>
          <div className="relative w-[31.56rem] h-[19.13rem]">
            <div className="absolute top-[18.38rem] left-[0rem] tracking-[0.5px] leading-[150%]">{`Do not reduce the size of the logo to the point that it is no longer legible. `}</div>
            <img
              className="absolute top-[0rem] left-[0rem] w-[31.56rem] h-[17.75rem]"
              alt=""
              src="/frame-18.svg"
            />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[3.13rem]">
          <div className="relative w-[31.56rem] h-[18.94rem]">
            <div className="absolute top-[18.38rem] left-[0.19rem] tracking-[0.5px] leading-[150%]">{`Do not pair with different colors that are not part of the brand colors. `}</div>
            <img
              className="absolute top-[0rem] left-[0rem] w-[31.56rem] h-[17.75rem]"
              alt=""
              src="/frame-19.svg"
            />
          </div>
          <div className="relative w-[31.63rem] h-[18.94rem]">
            <div className="absolute top-[18.38rem] left-[0rem] tracking-[0.5px] leading-[150%]">{`Do not use the logos over messy and cluttered images. `}</div>
            <img
              className="absolute top-[0rem] left-[0.06rem] w-[31.56rem] h-[17.75rem]"
              alt=""
              src="/frame-20.svg"
            />
          </div>
          <div className="relative w-[31.56rem] h-[18.94rem]">
            <div className="absolute top-[18.38rem] left-[0rem] tracking-[0.5px] leading-[150%]">{`Do not use any shadows on the logo. `}</div>
            <img
              className="absolute top-[0rem] left-[0rem] w-[31.56rem] h-[18.69rem]"
              alt=""
              src="/frame-21.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2Logo;
