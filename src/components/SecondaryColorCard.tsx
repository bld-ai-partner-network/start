import { FunctionComponent, memo } from "react";

const SecondaryColorCard: FunctionComponent = memo(() => {
  return (
    <div className="flex flex-col items-start justify-start gap-[6.25rem] text-left text-[3.5rem] text-text-primary font-h1">
      <h1 className="m-0 relative text-inherit tracking-[-1.5px] leading-[112%] font-semibold font-inherit text-text-secondary">
        Secondary Color
      </h1>
      <div className="flex flex-row items-end justify-start gap-[6.25rem] text-[0.88rem]">
        <div className="flex flex-col items-start justify-start gap-[0.31rem]">
          <div className="relative text-[0.75rem] tracking-[0.5px] leading-[266%] uppercase font-semibold text-text-secondary">
            Shades
          </div>
          <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
            <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0">
                  <span>
                    <span>Main</span>
                  </span>
                </p>
                <p className="m-0 text-text-secondary">(#B3AFE9)</p>
              </span>
            </div>
            <div className="relative rounded bg-secondary-main w-[2.88rem] h-[2.88rem]" />
          </div>
          <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
            <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0">Dark</p>
                <p className="m-0 text-text-secondary">(#7D7AA3)</p>
              </span>
            </div>
            <div className="relative rounded bg-secondary-dark w-[2.88rem] h-[2.88rem]" />
          </div>
          <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
            <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0">Light</p>
                <p className="m-0 text-text-secondary">(#C2BFED)</p>
              </span>
            </div>
            <div className="relative rounded bg-secondary-light w-[2.88rem] h-[2.88rem]" />
          </div>
          <div className="relative text-[0.75rem] tracking-[0.5px] leading-[266%] uppercase font-semibold text-text-secondary">
            STATES
          </div>
          <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
            <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0">Background</p>
                <p className="m-0 text-text-secondary">(#F3F5FD)</p>
              </span>
            </div>
            <button className="cursor-pointer p-0 bg-bldai-secondary-background relative rounded box-border w-[2.88rem] h-[2.88rem] border-[1px] border-solid border-grey-grey-300" />
          </div>
          <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
            <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0">Border</p>
                <p className="m-0 text-text-secondary">(#D6D5F3)</p>
              </span>
            </div>
            <div className="relative rounded bg-bldai-secondary-border w-[2.88rem] h-[2.88rem]" />
          </div>
        </div>
        <img
          className="relative w-[26.88rem] h-[26.88rem]"
          alt=""
          src="/sunglow.svg"
        />
      </div>
      <div className="relative text-[1rem] tracking-[0.15px] leading-[150%] flex items-center w-[46.5rem]">{`The secondary purple is used to support the main purple. These shades are especially useful during dark mode or for when there are graphic elements present. `}</div>
    </div>
  );
});

export default SecondaryColorCard;
