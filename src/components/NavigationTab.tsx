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

    const main6Style: CSSProperties = useMemo(() => {
      return {
        left: mainLeft,
        gap: mainGap,
      };
    }, [mainLeft, mainGap]);

    const tabContent6Style: CSSProperties = useMemo(() => {
      return {
        fontSize: tabContentFontSize,
      };
    }, [tabContentFontSize]);

    const lineIcon6Style: CSSProperties = useMemo(() => {
      return {
        height: lineIconHeight,
      };
    }, [lineIconHeight]);

    return (
      <div
        className="h-full min-h-[30px] text-center text-mini text-bldai-text-light-contrast font-bldai-special-overline flex-1"
        style={stateActiveStyle}
      >
        <div
          className="absolute top-[calc(50%_-_14px)] left-[calc(50%_-_52.3px)] flex flex-col items-center justify-start gap-[5px]"
          style={main6Style}
        >
          <div className="self-stretch flex flex-col items-center justify-start">
            <div
              className="relative leading-[150%] uppercase font-semibold"
              style={tabContent6Style}
            >
              {text}
            </div>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden h-0.5 shrink-0"
            alt=""
            src={tabContentImageDimensions}
            style={lineIcon6Style}
          />
        </div>
      </div>
    );
  }
);

export default NavigationTab;
