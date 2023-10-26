import { FunctionComponent, memo } from "react";

const Footer: FunctionComponent = memo(() => {
  return (
    <section className="self-stretch bg-bldai-primary-dark h-[6.25rem] flex flex-col items-start justify-center py-[0rem] px-[10rem] box-border text-left text-[0.75rem] text-primary-contrast-text font-h1">
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
        <div className="flex-1 flex flex-row items-center justify-end gap-[3.13rem] text-[1.17rem] text-bldai-secondary-border">
          <a
            className="[text-decoration:none] flex flex-row items-start justify-start text-[inherit]"
            href="https://www.bld.ai/"
          >
            <div className="flex flex-col items-start justify-start">
              <div className="relative tracking-[0.13px] leading-[157%] font-semibold">
                Back to Main Site
              </div>
            </div>
          </a>
          <a
            className="[text-decoration:none] flex flex-row items-start justify-start text-[inherit]"
            href="https://app.termly.io/document/privacy-policy/d6975602-fd98-428f-8d3b-585c382fd414"
          >
            <div className="flex flex-col items-start justify-start">
              <div className="relative tracking-[0.13px] leading-[157%] font-semibold">
                Privacy
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
});

export default Footer;
