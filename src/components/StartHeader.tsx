import { FunctionComponent, memo } from "react";

const StartHeader: FunctionComponent = memo(() => {
  return (
    <header className="self-stretch bg-bldai-primary-main overflow-hidden flex flex-row items-center justify-between py-[1.56rem] px-[10rem] text-left text-[0.94rem] text-bldai-text-light-contrast font-bldai-special-overline">
      <img
        className="relative w-[3.13rem] h-[3.13rem]"
        alt=""
        src="/colorwhite.svg"
      />
      <nav className="m-0 flex-1 flex flex-row items-center justify-start py-[0rem] px-[6.25rem] gap-[3.13rem] text-center text-[0.94rem] text-bldai-primary-background font-bldai-special-overline">
        <a
          className="[text-decoration:none] relative leading-[150%] uppercase font-semibold text-[inherit]"
          href="https://bld.ai"
        >
          Home
        </a>
        <a
          className="[text-decoration:none] relative leading-[150%] uppercase font-semibold text-[inherit]"
          href="https://www.bld.ai/about"
          target="_blank"
        >
          About
        </a>
      </nav>
      <a
        className="[text-decoration:none] flex flex-row items-start justify-start text-[inherit]"
        href="https://www.bld.ai/launch"
      >
        <div className="rounded flex flex-col items-start justify-start">
          <div className="rounded flex flex-col items-center justify-start py-[0.5rem] px-[1.38rem] border-[1px] border-solid border-bldai-text-light-contrast">
            <div className="overflow-hidden flex flex-row items-center justify-start">
              <div className="relative leading-[1.63rem] font-semibold">
                Request a proposal
              </div>
            </div>
          </div>
        </div>
      </a>
    </header>
  );
});

export default StartHeader;
