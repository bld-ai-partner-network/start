import { FunctionComponent, memo } from "react";

const CardContainer: FunctionComponent = memo(() => {
  return (
    <div className="self-stretch h-[48.63rem] flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[4rem] box-border text-left text-[2rem] text-bldai-text-light-contrast font-buttonlarge">
      <div className="self-stretch flex flex-row items-start justify-start pt-[4rem] px-[0rem] pb-[0rem] gap-[2rem] lg:flex-col lg:gap-[2rem] lg:items-start lg:justify-start md:flex-col md:gap-[2rem] md:items-start md:justify-start sm:flex-col sm:gap-[2rem] sm:items-start sm:justify-start">
        <a className="[text-decoration:none] flex-1 relative h-[18.31rem] overflow-hidden text-[inherit] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
          <div className="absolute top-[-0.04rem] left-[0rem] rounded-[21.33px] bg-bldai-text-primary w-[49rem] overflow-hidden flex flex-row items-center justify-between py-[5rem] px-[2rem] box-border">
            <div className="w-[36.56rem] flex flex-col items-start justify-start gap-[1.33rem]">
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                <div className="w-[23.81rem] flex flex-col items-start justify-start gap-[0.31rem]">
                  <h4 className="m-0 self-stretch relative text-inherit tracking-[0.25px] leading-[112%] font-semibold font-inherit">{`bld for Mining & Energy`}</h4>
                  <div className="self-stretch relative text-[1.25rem] leading-[112%] opacity-[0.56]">
                    <p className="m-0">We’ve worked with some of the top</p>
                    <p className="m-0">{`mining & energy companies on Earth.`}</p>
                  </div>
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
            className="absolute top-[3.76rem] left-[34.38rem] w-[10.75rem] h-[10.69rem] overflow-hidden opacity-[0.2]"
            alt=""
            src="/frame.svg"
          />
        </a>
        <a className="[text-decoration:none] flex-1 relative h-[18.31rem] overflow-hidden text-[inherit] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
          <div className="absolute top-[-0.04rem] left-[0rem] rounded-[21.33px] bg-bldai-text-primary w-[49rem] overflow-hidden flex flex-row items-center justify-between py-[5rem] px-[2rem] box-border">
            <div className="w-[36.56rem] flex flex-col items-start justify-start gap-[1.33rem]">
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                <div className="w-[23.81rem] flex flex-col items-start justify-start gap-[0.31rem]">
                  <h4 className="m-0 self-stretch relative text-inherit tracking-[0.25px] leading-[112%] font-semibold font-inherit">
                    bld for AI
                  </h4>
                  <div className="self-stretch relative text-[1.25rem] leading-[112%] opacity-[0.56]">
                    It's in the name - we've been on the cutting edge of AI
                    development for years.
                  </div>
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
            className="absolute top-[calc(50%_-_83.5px)] left-[34.44rem] w-[10.62rem] h-[10.44rem]"
            alt=""
            src="/art.svg"
          />
        </a>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-[4rem] px-[0rem] pb-[0rem] gap-[2rem]">
        <a className="[text-decoration:none] flex-1 relative h-[18.31rem] overflow-hidden text-[inherit]">
          <div className="absolute top-[-0.04rem] left-[0rem] rounded-[21.33px] bg-bldai-primary-dark w-[49rem] overflow-hidden flex flex-row items-center justify-between py-[5rem] px-[2rem] box-border">
            <div className="w-[36.56rem] flex flex-col items-start justify-start gap-[1.33rem]">
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                <div className="w-[23.81rem] flex flex-col items-start justify-start gap-[0.31rem]">
                  <h4 className="m-0 self-stretch relative text-inherit tracking-[0.25px] leading-[112%] font-semibold font-inherit">
                    bld for Startups
                  </h4>
                  <div className="self-stretch relative text-[1.25rem] leading-[112%] opacity-[0.56]">
                    We're a startup, too - and we know what it takes to be
                    successful.
                  </div>
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
            className="absolute top-[calc(50%_-_83.5px)] left-[34.44rem] w-[10.62rem] h-[10.44rem] object-cover"
            alt=""
            src="/art1@2x.png"
          />
        </a>
        <a className="[text-decoration:none] flex-1 relative h-[18.31rem] overflow-hidden text-[inherit]">
          <div className="absolute top-[-0.04rem] left-[0rem] rounded-[21.33px] bg-bldai-primary-dark w-[49rem] overflow-hidden flex flex-row items-center justify-between py-[5rem] px-[2rem] box-border">
            <div className="w-[36.56rem] flex flex-col items-start justify-start gap-[1.33rem]">
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                <div className="w-[23.81rem] flex flex-col items-start justify-start gap-[0.31rem]">
                  <h4 className="m-0 self-stretch relative text-inherit tracking-[0.25px] leading-[112%] font-semibold font-inherit">{`bld for Fintech & Web3`}</h4>
                  <div className="self-stretch relative text-[1.25rem] leading-[112%] opacity-[0.56]">
                    From enterprise-grade fintech to innovative Web3 platforms,
                    we've delivered.
                  </div>
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
            className="absolute top-[3.76rem] left-[34.38rem] w-[10.75rem] h-[10.69rem] overflow-hidden opacity-[0.2]"
            alt=""
            src="/frame.svg"
          />
        </a>
      </div>
    </div>
  );
});

export default CardContainer;
