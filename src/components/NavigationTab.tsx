import { FunctionComponent, memo, useMemo, type CSSProperties } from "react";

type NavigationTabType = {
  text?: string;
  tabContentImageDimensions?: string;

  /** Style props */
  stateActiveHeight?: CSSProperties["height"];
  stateActivePosition?: CSSProperties["position"];
  stateActiveMinHeight?: CSSProperties["minHeight"];
  stateActiveCursor?: CSSProperties["cursor"];
  stateActiveTextDecoration?: CSSProperties["textDecoration"];
  mainLeft?: CSSProperties["left"];
  mainGap?: CSSProperties["gap"];
  tabContentFontSize?: CSSProperties["fontSize"];
  lineIconHeight?: CSSProperties["height"];
};

const NavigationTab: FunctionComponent<NavigationTabType> = memo(
  ({
    text = "Tab Content",
    tabContentImageDimensions,
    stateActiveHeight,
    stateActivePosition,
    stateActiveMinHeight,
    stateActiveCursor,
    stateActiveTextDecoration,
    mainLeft,
    mainGap,
    tabContentFontSize,
    lineIconHeight,
  }) => {
    const stateActiveStyle: CSSProperties = useMemo(() => {
      return {
        height: stateActiveHeight,
        position: stateActivePosition,
        minHeight: stateActiveMinHeight,
        cursor: stateActiveCursor,
        textDecoration: stateActiveTextDecoration,
      };
    }, [
      stateActiveHeight,
      stateActivePosition,
      stateActiveMinHeight,
      stateActiveCursor,
      stateActiveTextDecoration,
    ]);

    const mainStyle: CSSProperties = useMemo(() => {
      return {
        left: mainLeft,
        gap: mainGap,
      };
    }, [mainLeft, mainGap]);

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

    return (
      <div
        className="h-full min-h-[30px] text-center text-mini text-primary-contrast-text font-h1 flex-1"
        style={stateActiveStyle}
      >
        <div
          className="absolute top-[calc(50%_-_14px)] left-[calc(50%_-_52.3px)] flex flex-col items-center justify-start gap-[5px]"
          style={mainStyle}
        >
          <div className="self-stretch flex flex-col items-center justify-start">
            <div
              className="relative leading-[150%] uppercase font-semibold"
              style={tabContentStyle}
            >
              {text}
            </div>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden h-0.5 shrink-0"
            alt=""
            src={tabContentImageDimensions}
            style={lineIconStyle}
          />
        </div>
      </div>
    );
  }
);

export default NavigationTab;
