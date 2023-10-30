import { FunctionComponent, memo } from "react";

const Footer: FunctionComponent = memo(() => {
  return (
    <footer className="self-stretch bg-bldai-primary-dark flex flex-col items-start justify-center py-[0rem] px-[10rem] box-border min-h-[4.69rem] text-left text-[0.75rem] text-bldai-text-light-contrast font-buttonlarge">
      <div className="self-stretch flex flex-row items-center justify-between">
        <div className="flex-1 flex flex-row items-center justify-start gap-[3.13rem]">
          <img
            className="relative w-[1.88rem] h-[1.88rem]"
            alt=""
            src="/logoprimary.svg"
          />
          <div className="flex-1 relative tracking-[0.5px] leading-[150%] opacity-[0.56]">
            <p className="m-0">{`Copyright © 2023 bld.ai. All Rights Reserved. `}</p>
            <p className="m-0">{`All other trademarks and copyrights are the property of their respective holders. All Rights Reserved. `}</p>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-end gap-[4.69rem] text-right text-[0.94rem] text-bldai-secondary-border">
          <a
            className="[text-decoration:none] relative leading-[150%] uppercase font-semibold text-[inherit]"
            href="https://bld.ai"
          >
            Back to Main Site
          </a>
          <a
            className="[text-decoration:none] relative leading-[150%] uppercase font-semibold text-[inherit]"
            href="https://app.termly.io/document/privacy-policy/d6975602-fd98-428f-8d3b-585c382fd414"
            target="_blank"
          >
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
