import { FunctionComponent, memo } from "react";

const ColorSwatch: FunctionComponent = memo(() => {
  return (
    <div className="rounded flex flex-row items-center justify-start p-[0.5rem] text-left text-[0.88rem] text-text-primary font-h1">
      <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0">Main</p>
          <p className="m-0 text-text-secondary">(#5C55B8)</p>
        </span>
      </div>
      <div className="relative rounded bg-primary-main w-[2.88rem] h-[2.88rem]" />
    </div>
  );
});

export default ColorSwatch;
