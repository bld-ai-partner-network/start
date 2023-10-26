import { FunctionComponent, memo, useMemo, type CSSProperties } from "react";

type TableHeaderRowType = {
  showHeaderRow?: boolean;

  /** Style props */
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
};

const TableHeaderRow: FunctionComponent<TableHeaderRowType> = memo(
  ({ showHeaderRow, propColor, propColor1 }) => {
    const characteristicsStyle: CSSProperties = useMemo(() => {
      return {
        color: propColor,
      };
    }, [propColor]);

    const variantsStyle: CSSProperties = useMemo(() => {
      return {
        color: propColor1,
      };
    }, [propColor1]);

    return (
      showHeaderRow && (
        <div className="self-stretch flex flex-row items-start justify-start text-left text-[1.5rem] text-bldai-text-secondary font-h1">
          <div className="flex-1 box-border h-[6.28rem] flex flex-col items-start justify-center p-[0.63rem] border-b-[1px] border-solid border-grey-grey-300">
            <div className="self-stretch flex-1 flex flex-row items-end justify-start">
              <div
                className="relative leading-[133.4%] font-semibold"
                style={characteristicsStyle}
              >
                Characteristics
              </div>
            </div>
          </div>
          <div className="flex-1 box-border h-[6.28rem] flex flex-col items-start justify-center p-[0.63rem] border-b-[1px] border-solid border-grey-grey-300">
            <div className="self-stretch flex-1 flex flex-row items-end justify-start">
              <div
                className="relative leading-[133.4%] font-semibold"
                style={variantsStyle}
              >
                Variants
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
);

export default TableHeaderRow;
