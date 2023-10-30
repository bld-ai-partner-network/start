import { FunctionComponent, memo } from "react";

const TableHeaderRow: FunctionComponent = memo(() => {
  return (
        <div className="self-stretch flex flex-row items-start justify-start text-left text-[1.5rem] text-bldai-text-secondary font-bldai-special-overline">
          <div className="flex-1 box-border h-[6.28rem] flex flex-col items-start justify-center p-[0.63rem] border-b-[1px] border-solid border-bldai-monochrome-grey-300">
            <div className="self-stretch flex-1 flex flex-row items-end justify-start">
              <div className="relative leading-[133.4%] font-semibold">
                Characteristics
              </div>
            </div>
          </div>
          <div className="flex-1 box-border h-[6.28rem] flex flex-col items-start justify-center p-[0.63rem] border-b-[1px] border-solid border-bldai-monochrome-grey-300">
            <div className="self-stretch flex-1 flex flex-row items-end justify-start">
              <div className="relative leading-[133.4%] font-semibold">
                Variants
              </div>
            </div>
          </div>
        </div>
  );
});

export default TableHeaderRow;
