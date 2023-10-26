import { FunctionComponent, memo } from "react";

const ColorContainer: FunctionComponent = memo(() => {
  return (
    <section className="bg-primary-background box-border w-[120rem] h-[67.59rem] overflow-hidden shrink-0 flex flex-col items-start justify-start p-[6.25rem] gap-[6.25rem] text-left text-[3.5rem] text-text-primary font-h1 border-b-[3px] border-solid border-grey-grey-300">
      <h1 className="m-0 relative text-inherit tracking-[-1.5px] leading-[112%] font-semibold font-inherit text-text-secondary">
        Supporting Colors
      </h1>
      <div className="flex flex-row items-start justify-start gap-[6.25rem] text-[1.5rem]">
        <div className="overflow-hidden flex flex-col items-start justify-start gap-[1.56rem]">
          <h2 className="m-0 relative text-inherit leading-[133.4%] font-semibold font-inherit">
            Info
          </h2>
          <div className="flex flex-col items-start justify-start gap-[0.63rem] text-[0.88rem]">
            <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
              <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">Main</p>
                  <p className="m-0 text-text-secondary">(#4259ED)</p>
                </span>
              </div>
              <div className="relative rounded bg-info-main w-[2.88rem] h-[2.88rem]" />
            </div>
            <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
              <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">Dark</p>
                  <p className="m-0 text-text-secondary">(#0C1471)</p>
                </span>
              </div>
              <div className="relative rounded bg-info-dark w-[2.88rem] h-[2.88rem]" />
            </div>
            <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
              <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">Light</p>
                  <p className="m-0 text-text-secondary">(#D9E0FE)</p>
                </span>
              </div>
              <div className="relative rounded bg-info-light w-[2.88rem] h-[2.88rem]" />
            </div>
            <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
              <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">Dark Text</p>
                  <p className="m-0 text-text-secondary">(#1a245f)</p>
                </span>
              </div>
              <div className="relative rounded bg-bldai-interface-info-dark-text w-[2.88rem] h-[2.88rem]" />
            </div>
            <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
              <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">Light Background</p>
                  <p className="m-0 text-text-secondary">(#eceefd)</p>
                </span>
              </div>
              <button className="cursor-pointer p-0 bg-bldai-interface-info-background relative rounded box-border w-[2.88rem] h-[2.88rem] border-[1px] border-solid border-grey-grey-300" />
            </div>
          </div>
        </div>
        <div className="overflow-hidden flex flex-col items-start justify-start gap-[1.56rem]">
          <h2 className="m-0 relative text-inherit leading-[133.4%] font-semibold font-inherit">
            Error
          </h2>
          <div className="flex flex-col items-start justify-start gap-[0.63rem] text-[0.88rem]">
            <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
              <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">Main</p>
                  <p className="m-0 text-text-secondary">(#CE1A1D)</p>
                </span>
              </div>
              <div className="relative rounded bg-error-main w-[2.88rem] h-[2.88rem]" />
            </div>
            <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
              <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">Dark</p>
                  <p className="m-0 text-text-secondary">(#940D27)</p>
                </span>
              </div>
              <div className="relative rounded bg-error-dark w-[2.88rem] h-[2.88rem]" />
            </div>
            <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
              <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">Light</p>
                  <p className="m-0 text-text-secondary">(#FCDFD0)</p>
                </span>
              </div>
              <div className="relative rounded bg-error-light w-[2.88rem] h-[2.88rem]" />
            </div>
            <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
              <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">Dark Text</p>
                  <p className="m-0 text-text-secondary">(#520a0c)</p>
                </span>
              </div>
              <div className="relative rounded bg-bldai-interface-error-dark-text w-[2.88rem] h-[2.88rem]" />
            </div>
            <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
              <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">Light Background</p>
                  <p className="m-0 text-text-secondary">(#FAE8E8)</p>
                </span>
              </div>
              <button className="cursor-pointer p-0 bg-bldai-interface-error-background relative rounded box-border w-[2.88rem] h-[2.88rem] border-[1px] border-solid border-grey-grey-300" />
            </div>
          </div>
        </div>
        <div className="overflow-hidden flex flex-col items-start justify-start gap-[1.56rem]">
          <h2 className="m-0 relative text-inherit leading-[133.4%] font-semibold font-inherit">
            Warning
          </h2>
          <div className="flex flex-col items-start justify-start gap-[0.63rem] text-[0.88rem]">
            <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
              <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">Main</p>
                  <p className="m-0 text-text-secondary">(#FFA100)</p>
                </span>
              </div>
              <div className="relative rounded bg-warning-main w-[2.88rem] h-[2.88rem]" />
            </div>
            <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
              <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">Dark</p>
                  <p className="m-0 text-text-secondary">(#FFA100)</p>
                </span>
              </div>
              <div className="relative rounded bg-warning-dark w-[2.88rem] h-[2.88rem]" />
            </div>
            <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
              <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">Light</p>
                  <p className="m-0 text-text-secondary">(#FFE9B4)</p>
                </span>
              </div>
              <div className="relative rounded bg-warning-light w-[2.88rem] h-[2.88rem]" />
            </div>
            <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
              <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">Dark Text</p>
                  <p className="m-0 text-text-secondary">(#664000)</p>
                </span>
              </div>
              <div className="relative rounded bg-bldai-interface-warning-dark-text w-[2.88rem] h-[2.88rem]" />
            </div>
            <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
              <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">Light Background</p>
                  <p className="m-0 text-text-secondary">(#fff5e5)</p>
                </span>
              </div>
              <button className="cursor-pointer p-0 bg-bldai-interface-warning-background relative rounded box-border w-[2.88rem] h-[2.88rem] border-[1px] border-solid border-grey-grey-300" />
            </div>
          </div>
        </div>
        <div className="overflow-hidden flex flex-col items-start justify-start gap-[1.56rem]">
          <h2 className="m-0 relative text-inherit leading-[133.4%] font-semibold font-inherit">
            Success
          </h2>
          <div className="flex flex-col items-start justify-start gap-[0.63rem] text-[0.88rem]">
            <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
              <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">Main</p>
                  <p className="m-0 text-text-secondary">(#00C871)</p>
                </span>
              </div>
              <div className="relative rounded bg-success-main w-[2.88rem] h-[2.88rem]" />
            </div>
            <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
              <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">Dark</p>
                  <p className="m-0 text-text-secondary">(#00605C)</p>
                </span>
              </div>
              <div className="relative rounded bg-success-dark w-[2.88rem] h-[2.88rem]" />
            </div>
            <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
              <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">Light</p>
                  <p className="m-0 text-text-secondary">(#A1DCA3)</p>
                </span>
              </div>
              <div className="relative rounded bg-success-light w-[2.88rem] h-[2.88rem]" />
            </div>
            <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
              <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">Dark Text</p>
                  <p className="m-0 text-text-secondary">(#1E4620)</p>
                </span>
              </div>
              <div className="relative rounded bg-bldai-interface-success-dark-text w-[2.88rem] h-[2.88rem]" />
            </div>
            <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
              <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">Light Background</p>
                  <p className="m-0 text-text-secondary">(#EDF7ED)</p>
                </span>
              </div>
              <button className="cursor-pointer p-0 bg-bldai-interface-success-background relative rounded box-border w-[2.88rem] h-[2.88rem] border-[1px] border-solid border-grey-grey-300" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[1.56rem]">
          <h2 className="m-0 relative text-inherit leading-[133.4%] font-semibold font-inherit">
            Text
          </h2>
          <div className="flex flex-col items-start justify-start gap-[0.63rem] text-[0.88rem] text-grey-grey-900">
            <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
              <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">Primary</p>
                  <p className="m-0 text-text-secondary">(#253858)</p>
                </span>
              </div>
              <div className="relative rounded bg-text-primary w-[2.88rem] h-[2.88rem]" />
            </div>
            <div className="rounded flex flex-row items-center justify-start p-[0.5rem] text-text-primary">
              <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">Secondary</p>
                  <p className="m-0 text-text-secondary">(#5C6983)</p>
                </span>
              </div>
              <div className="relative rounded bg-bldai-text-secondary w-[2.88rem] h-[2.88rem]" />
            </div>
            <div className="rounded flex flex-row items-center justify-start p-[0.5rem] text-text-primary">
              <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">Disabled</p>
                  <p className="m-0 text-text-secondary">(#9A9C9D)</p>
                </span>
              </div>
              <div className="relative rounded bg-bldai-text-disabled w-[2.88rem] h-[2.88rem]" />
            </div>
            <div className="rounded bg-primary-main flex flex-row items-center justify-start p-[0.5rem] text-primary-contrast-text">
              <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">Light Contrast</p>
                  <p className="m-0">(#FFFFFF)</p>
                </span>
              </div>
              <div className="relative rounded bg-primary-contrast-text w-[2.88rem] h-[2.88rem]" />
            </div>
            <div className="rounded bg-success-main flex flex-row items-center justify-start p-[0.5rem]">
              <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">Dark Contrast</p>
                  <p className="m-0">(#212121)</p>
                </span>
              </div>
              <div className="relative rounded bg-grey-grey-900 w-[2.88rem] h-[2.88rem]" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative text-[1rem] tracking-[0.15px] leading-[150%] flex items-center w-[51.94rem]">{`These shades are to be used sparingly such as in buttons are highlighting texts and bounding boxes. `}</div>
    </section>
  );
});

export default ColorContainer;
