import { FunctionComponent, memo, useMemo, type CSSProperties } from "react";

type CaseStudyContainerType = {
  header?: string;
  companyDescription?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const CaseStudyContainer: FunctionComponent<CaseStudyContainerType> = memo(
  ({ header, companyDescription, propBackgroundColor }) => {
    const featureStyle: CSSProperties = useMemo(() => {
      return {
        backgroundColor: propBackgroundColor,
      };
    }, [propBackgroundColor]);

    return (
      <div className="self-stretch relative w-[49rem] overflow-hidden shrink-0 text-left text-[2rem] text-bldai-text-light-contrast font-bldai-special-overline">
        <div className="absolute top-[-1.52rem] left-[0rem] w-[49rem] h-[38.29rem] overflow-hidden flex flex-col items-center justify-start">
          <div className="relative w-[49rem] h-[21.38rem] overflow-hidden shrink-0">
            <div
              className="absolute top-[1.48rem] left-[0rem] rounded-[21.33px] bg-bldai-text-primary w-[49rem] h-[18rem] overflow-hidden flex flex-row items-center justify-center py-[5rem] px-[2rem] box-border"
              style={featureStyle}
            >
              <div className="w-[36.56rem] flex flex-col items-start justify-start gap-[1.33rem]">
                <div className="flex flex-col items-start justify-start gap-[0.31rem]">
                  <h1 className="m-0 relative text-inherit tracking-[0.25px] leading-[112%] font-semibold font-inherit inline-block w-[29.25rem]">
                    {header}
                  </h1>
                  <div className="relative text-[1.25rem] leading-[112%] inline-block w-[29.25rem] opacity-[0.56]">
                    <p className="m-0">{companyDescription}</p>
                    <p className="m-0">
                      cutting edge of AI development for years.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start text-[0.94rem] text-bldai-monochrome-grey-350">
                  <div className="rounded flex flex-col items-center justify-start py-[0.5rem] px-[0rem]">
                    <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                      <div className="overflow-hidden flex flex-row items-center justify-start">
                        <div className="relative leading-[1.63rem] font-semibold">
                          See case studies
                        </div>
                      </div>
                      <img
                        className="relative w-[1.5rem] h-[1.5rem]"
                        alt=""
                        src="/mastericonrightlarge.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="absolute top-[1.52rem] left-[25.78rem] w-[21.75rem] h-[21.38rem] overflow-hidden"
              alt=""
              src="/frame1.svg"
            />
          </div>
        </div>
      </div>
    );
  }
);

export default CaseStudyContainer;
