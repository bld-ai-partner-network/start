import { FunctionComponent, memo, useMemo, type CSSProperties } from "react";

type NavigationBarType = {
  line?: string;
  line1?: string;
  line2?: string;
  line3?: string;
  line4?: string;
  line5?: string;

  /** Style props */
  navigationBarWidth?: CSSProperties["width"];
  tabHeight?: CSSProperties["height"];
  tabMinHeight?: CSSProperties["minHeight"];
  tabCursor?: CSSProperties["cursor"];
  tabTextDecoration?: CSSProperties["textDecoration"];
  mainGap?: CSSProperties["gap"];
  tabContentFontSize?: CSSProperties["fontSize"];
  lineIconHeight?: CSSProperties["height"];
  tabHeight1?: CSSProperties["height"];
  tabMinHeight1?: CSSProperties["minHeight"];
  tabCursor1?: CSSProperties["cursor"];
  tabTextDecoration1?: CSSProperties["textDecoration"];
  mainGap1?: CSSProperties["gap"];
  tabContentFontSize1?: CSSProperties["fontSize"];
  lineIconHeight1?: CSSProperties["height"];
  tabHeight2?: CSSProperties["height"];
  tabMinHeight2?: CSSProperties["minHeight"];
  tabCursor2?: CSSProperties["cursor"];
  tabTextDecoration2?: CSSProperties["textDecoration"];
  mainGap2?: CSSProperties["gap"];
  tabContentFontSize2?: CSSProperties["fontSize"];
  lineIconHeight2?: CSSProperties["height"];
  tabHeight3?: CSSProperties["height"];
  tabMinHeight3?: CSSProperties["minHeight"];
  tabCursor3?: CSSProperties["cursor"];
  tabTextDecoration3?: CSSProperties["textDecoration"];
  mainGap3?: CSSProperties["gap"];
  tabContentFontSize3?: CSSProperties["fontSize"];
  lineIconHeight3?: CSSProperties["height"];
  tabHeight4?: CSSProperties["height"];
  tabMinHeight4?: CSSProperties["minHeight"];
  tabCursor4?: CSSProperties["cursor"];
  tabTextDecoration4?: CSSProperties["textDecoration"];
  mainGap4?: CSSProperties["gap"];
  tabContentFontSize4?: CSSProperties["fontSize"];
  lineIconHeight4?: CSSProperties["height"];
  tabHeight5?: CSSProperties["height"];
  tabMinHeight5?: CSSProperties["minHeight"];
  tabCursor5?: CSSProperties["cursor"];
  tabTextDecoration5?: CSSProperties["textDecoration"];
  mainGap5?: CSSProperties["gap"];
  tabContentFontSize5?: CSSProperties["fontSize"];
  lineIconHeight5?: CSSProperties["height"];
};

const NavigationBar: FunctionComponent<NavigationBarType> = memo(
  ({
    line,
    line1,
    line2,
    line3,
    line4,
    line5,
    navigationBarWidth,
    tabHeight,
    tabMinHeight,
    tabCursor,
    tabTextDecoration,
    mainGap,
    tabContentFontSize,
    lineIconHeight,
    tabHeight1,
    tabMinHeight1,
    tabCursor1,
    tabTextDecoration1,
    mainGap1,
    tabContentFontSize1,
    lineIconHeight1,
    tabHeight2,
    tabMinHeight2,
    tabCursor2,
    tabTextDecoration2,
    mainGap2,
    tabContentFontSize2,
    lineIconHeight2,
    tabHeight3,
    tabMinHeight3,
    tabCursor3,
    tabTextDecoration3,
    mainGap3,
    tabContentFontSize3,
    lineIconHeight3,
    tabHeight4,
    tabMinHeight4,
    tabCursor4,
    tabTextDecoration4,
    mainGap4,
    tabContentFontSize4,
    lineIconHeight4,
    tabHeight5,
    tabMinHeight5,
    tabCursor5,
    tabTextDecoration5,
    mainGap5,
    tabContentFontSize5,
    lineIconHeight5,
  }) => {
    const navigationBarStyle: CSSProperties = useMemo(() => {
      return {
        width: navigationBarWidth,
      };
    }, [navigationBarWidth]);

    const tabStyle: CSSProperties = useMemo(() => {
      return {
        height: tabHeight,
        minHeight: tabMinHeight,
        cursor: tabCursor,
        textDecoration: tabTextDecoration,
      };
    }, [tabHeight, tabMinHeight, tabCursor, tabTextDecoration]);

    const mainStyle: CSSProperties = useMemo(() => {
      return {
        gap: mainGap,
      };
    }, [mainGap]);

    const tabContentStyle: CSSProperties = useMemo(() => {
      return {
        fontSize: tabContentFontSize,
      };
    }, [tabContentFontSize]);

    const lineIconStyle: CSSProperties = useMemo(() => {
      return {
        height: lineIconHeight,
      };
    }, [lineIconHeight]);

    const tab1Style: CSSProperties = useMemo(() => {
      return {
        height: tabHeight1,
        minHeight: tabMinHeight1,
        cursor: tabCursor1,
        textDecoration: tabTextDecoration1,
      };
    }, [tabHeight1, tabMinHeight1, tabCursor1, tabTextDecoration1]);

    const main1Style: CSSProperties = useMemo(() => {
      return {
        gap: mainGap1,
      };
    }, [mainGap1]);

    const tabContent1Style: CSSProperties = useMemo(() => {
      return {
        fontSize: tabContentFontSize1,
      };
    }, [tabContentFontSize1]);

    const lineIcon1Style: CSSProperties = useMemo(() => {
      return {
        height: lineIconHeight1,
      };
    }, [lineIconHeight1]);

    const tab2Style: CSSProperties = useMemo(() => {
      return {
        height: tabHeight2,
        minHeight: tabMinHeight2,
        cursor: tabCursor2,
        textDecoration: tabTextDecoration2,
      };
    }, [tabHeight2, tabMinHeight2, tabCursor2, tabTextDecoration2]);

    const main2Style: CSSProperties = useMemo(() => {
      return {
        gap: mainGap2,
      };
    }, [mainGap2]);

    const tabContent2Style: CSSProperties = useMemo(() => {
      return {
        fontSize: tabContentFontSize2,
      };
    }, [tabContentFontSize2]);

    const lineIcon2Style: CSSProperties = useMemo(() => {
      return {
        height: lineIconHeight2,
      };
    }, [lineIconHeight2]);

    const tab3Style: CSSProperties = useMemo(() => {
      return {
        height: tabHeight3,
        minHeight: tabMinHeight3,
        cursor: tabCursor3,
        textDecoration: tabTextDecoration3,
      };
    }, [tabHeight3, tabMinHeight3, tabCursor3, tabTextDecoration3]);

    const main3Style: CSSProperties = useMemo(() => {
      return {
        gap: mainGap3,
      };
    }, [mainGap3]);

    const tabContent3Style: CSSProperties = useMemo(() => {
      return {
        fontSize: tabContentFontSize3,
      };
    }, [tabContentFontSize3]);

    const lineIcon3Style: CSSProperties = useMemo(() => {
      return {
        height: lineIconHeight3,
      };
    }, [lineIconHeight3]);

    const tab4Style: CSSProperties = useMemo(() => {
      return {
        height: tabHeight4,
        minHeight: tabMinHeight4,
        cursor: tabCursor4,
        textDecoration: tabTextDecoration4,
      };
    }, [tabHeight4, tabMinHeight4, tabCursor4, tabTextDecoration4]);

    const main4Style: CSSProperties = useMemo(() => {
      return {
        gap: mainGap4,
      };
    }, [mainGap4]);

    const tabContent4Style: CSSProperties = useMemo(() => {
      return {
        fontSize: tabContentFontSize4,
      };
    }, [tabContentFontSize4]);

    const lineIcon4Style: CSSProperties = useMemo(() => {
      return {
        height: lineIconHeight4,
      };
    }, [lineIconHeight4]);

    const tab5Style: CSSProperties = useMemo(() => {
      return {
        height: tabHeight5,
        minHeight: tabMinHeight5,
        cursor: tabCursor5,
        textDecoration: tabTextDecoration5,
      };
    }, [tabHeight5, tabMinHeight5, tabCursor5, tabTextDecoration5]);

    const main5Style: CSSProperties = useMemo(() => {
      return {
        gap: mainGap5,
      };
    }, [mainGap5]);

    const tabContent5Style: CSSProperties = useMemo(() => {
      return {
        fontSize: tabContentFontSize5,
      };
    }, [tabContentFontSize5]);

    const lineIcon5Style: CSSProperties = useMemo(() => {
      return {
        height: lineIconHeight5,
      };
    }, [lineIconHeight5]);

    return (
      <div
        className="w-[800px] flex flex-row items-start justify-start text-center text-mini text-primary-contrast-text font-h1"
        style={navigationBarStyle}
      >
        <div className="flex-1 relative h-[30px] min-h-[30px]" style={tabStyle}>
          <div
            className="absolute top-[calc(50%_-_14px)] left-[calc(50%_-_22.65px)] flex flex-col items-center justify-start gap-[5px]"
            style={mainStyle}
          >
            <div className="self-stretch flex flex-col items-center justify-start">
              <div
                className="relative leading-[150%] uppercase font-semibold"
                style={tabContentStyle}
              >
                Home
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden h-0 shrink-0"
              alt=""
              src={line}
              style={lineIconStyle}
            />
          </div>
        </div>
        <div
          className="flex-1 relative h-[30px] min-h-[30px]"
          style={tab1Style}
        >
          <div
            className="absolute top-[calc(50%_-_14px)] left-[calc(50%_-_21.15px)] flex flex-col items-center justify-start gap-[5px]"
            style={main1Style}
          >
            <div className="self-stretch flex flex-col items-center justify-start">
              <div
                className="relative leading-[150%] uppercase font-semibold"
                style={tabContent1Style}
              >
                Logo
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden h-0 shrink-0"
              alt=""
              src={line1}
              style={lineIcon1Style}
            />
          </div>
        </div>
        <div
          className="flex-1 relative h-[30px] min-h-[30px]"
          style={tab2Style}
        >
          <div
            className="absolute top-[calc(50%_-_14px)] left-[calc(50%_-_30.65px)] flex flex-col items-center justify-start gap-[5px]"
            style={main2Style}
          >
            <div className="self-stretch flex flex-col items-center justify-start">
              <div
                className="relative leading-[150%] uppercase font-semibold"
                style={tabContent2Style}
              >
                Colors
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden h-0 shrink-0"
              alt=""
              src={line2}
              style={lineIcon2Style}
            />
          </div>
        </div>
        <div
          className="flex-1 relative h-[30px] min-h-[30px]"
          style={tab3Style}
        >
          <div
            className="absolute top-[calc(50%_-_14px)] left-[calc(50%_-_50.65px)] flex flex-col items-center justify-start gap-[5px]"
            style={main3Style}
          >
            <div className="self-stretch flex flex-col items-center justify-start">
              <div
                className="relative leading-[150%] uppercase font-semibold"
                style={tabContent3Style}
              >
                Typography
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden h-0 shrink-0"
              alt=""
              src={line3}
              style={lineIcon3Style}
            />
          </div>
        </div>
        <div
          className="flex-1 relative h-[30px] min-h-[30px]"
          style={tab4Style}
        >
          <div
            className="absolute top-[calc(50%_-_14px)] left-[calc(50%_-_38.65px)] flex flex-col items-center justify-start gap-[5px]"
            style={main4Style}
          >
            <div className="self-stretch flex flex-col items-center justify-start">
              <div
                className="relative leading-[150%] uppercase font-semibold"
                style={tabContent4Style}
              >
                Graphics
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden h-0 shrink-0"
              alt=""
              src={line4}
              style={lineIcon4Style}
            />
          </div>
        </div>
        <div
          className="flex-1 relative h-[30px] min-h-[30px]"
          style={tab5Style}
        >
          <div
            className="absolute top-[calc(50%_-_14px)] left-[calc(50%_-_52.65px)] flex flex-col items-center justify-start gap-[5px]"
            style={main5Style}
          >
            <div className="self-stretch flex flex-col items-center justify-start">
              <div
                className="relative leading-[150%] uppercase font-semibold"
                style={tabContent5Style}
              >
                Brand story
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden h-0 shrink-0"
              alt=""
              src={line5}
              style={lineIcon5Style}
            />
          </div>
        </div>
      </div>
    );
  }
);

export default NavigationBar;
