import { FunctionComponent, memo } from "react";
import ColorSwatch from "./ColorSwatch";

const PrimaryColorCard: FunctionComponent = memo(() => {
  return (
    <div className="flex flex-col items-start justify-start gap-[6.25rem] text-left text-[3.5rem] text-bldai-text-primary font-bldai-special-overline">
      <h2 className="m-0 relative text-inherit tracking-[-1.5px] leading-[112%] font-semibold font-inherit text-text-secondary">
        Primary Color
      </h2>
      <div className="flex flex-row items-end justify-start gap-[6.25rem] text-[0.88rem]">
        <div className="flex flex-col items-start justify-start gap-[0.31rem]">
          <div className="relative text-[0.75rem] tracking-[0.5px] leading-[266%] uppercase font-semibold text-text-secondary">
            SHADES
          </div>
          <ColorSwatch />
          <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
            <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0">{`Dark `}</p>
                <p className="m-0 text-text-secondary">(#403B80)</p>
              </span>
            </div>
            <div className="relative rounded bg-bldai-primary-dark w-[2.88rem] h-[2.88rem]" />
          </div>
          <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
            <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0">
                  <span>
                    <span>Light</span>
                    <b className="font-bldai-special-overline">{` `}</b>
                  </span>
                </p>
                <p className="m-0 text-text-secondary">(#DCDBF9)</p>
              </span>
            </div>
            <div className="relative rounded bg-bldai-primary-light w-[2.88rem] h-[2.88rem]" />
          </div>
          <div className="relative text-[0.75rem] tracking-[0.5px] leading-[266%] uppercase font-semibold text-text-secondary">
            STATES
          </div>
          <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
            <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
              <span className="[line-break:anywhere] w-full">
                <span>{`Background `}</span>
                <span className="text-text-secondary">(#F9FBFE)</span>
              </span>
            </div>
            <button className="cursor-pointer p-0 bg-bldai-primary-background relative rounded box-border w-[2.88rem] h-[2.88rem] border-[1px] border-solid border-bldai-monochrome-grey-300" />
          </div>
          <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
            <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0">{`Border `}</p>
                <p className="m-0 text-text-secondary">(#ABA8DB)</p>
              </span>
            </div>
            <div className="relative rounded bg-bldai-primary-border w-[2.88rem] h-[2.88rem]" />
          </div>
        </div>
        <img
          className="relative w-[26.88rem] h-[26.88rem]"
          alt=""
          src="/frame-1.svg"
        />
      </div>
      <div className="relative text-[1rem] tracking-[0.15px] leading-[150%] flex items-center w-[46.5rem]">{`The primary brand purple is the main purple that should be used across all materials. The slight variations of the purple should be used sparingly or as support of the main color when needed. `}</div>
    </div>
  );
});

export default PrimaryColorCard;
