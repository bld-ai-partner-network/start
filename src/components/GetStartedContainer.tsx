import { FunctionComponent, memo } from "react";

const GetStartedContainer: FunctionComponent = memo(() => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] text-left text-[1.25rem] text-bldai-text-light-contrast font-buttonlarge">
      <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[0.63rem]">
        <h3 className="m-0 self-stretch relative text-[2.25rem] leading-[112%] font-semibold font-inherit">
          Ready to get started?
        </h3>
        <div className="self-stretch relative leading-[112%]">
          Our team can quickly provide a proposal, estimate, and even wireframes
          for any software project.
        </div>
        <div className="self-stretch relative leading-[112%]">
          Want to learn more? Check out a few case studies of our previous work
          below.
        </div>
      </div>
      <a
        className="[text-decoration:none] rounded flex flex-col items-start justify-start text-[0.94rem] text-[inherit]"
        href="https://www.bld.ai/launch"
        target="_blank"
      >
        <div className="rounded flex flex-col items-center justify-start py-[0.5rem] px-[1.38rem] border-[1px] border-solid border-bldai-text-light-contrast">
          <div className="overflow-hidden flex flex-row items-center justify-start">
            <div className="relative leading-[1.63rem] font-semibold">
              Request a proposal
            </div>
          </div>
        </div>
      </a>
    </div>
  );
});

export default GetStartedContainer;
