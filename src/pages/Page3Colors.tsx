import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

const Page3Colors: FunctionComponent = () => {
  return (
    <div className="relative bg-primary-background w-full flex flex-col items-start justify-end">
      <header className="bg-primary-main box-border w-[120rem] h-[12.59rem] overflow-hidden shrink-0 flex flex-row items-center justify-between p-[6.25rem] text-left text-[3.75rem] text-primary-contrast-text font-h1 border-b-[3px] border-solid border-grey-grey-300">
        <div className="self-stretch flex flex-row items-center justify-start gap-[3.13rem]">
          <img
            className="relative w-[3.13rem] h-[3.13rem]"
            alt=""
            src="/logoprimary1.svg"
          />
          <h1 className="m-0 relative text-inherit tracking-[0.5px] leading-[112%] font-semibold font-inherit">
            Colors
          </h1>
        </div>
        <NavigationBar
          line="/line1.svg"
          line1="/line1.svg"
          line2="/line4.svg"
          line3="/line1.svg"
          line4="/line1.svg"
          line5="/line1.svg"
          navigationBarWidth="50rem"
          tabHeight="1.88rem"
          tabMinHeight="1.88rem"
          tabCursor="pointer"
          tabTextDecoration="none"
          mainGap="0.31rem"
          tabContentFontSize="0.94rem"
          lineIconHeight="0rem"
          tabHeight1="1.88rem"
          tabMinHeight1="1.88rem"
          tabCursor1="pointer"
          tabTextDecoration1="none"
          mainGap1="0.31rem"
          tabContentFontSize1="0.94rem"
          lineIconHeight1="0rem"
          tabHeight2="1.88rem"
          tabMinHeight2="1.88rem"
          tabCursor2="unset"
          tabTextDecoration2="unset"
          mainGap2="0.31rem"
          tabContentFontSize2="0.94rem"
          lineIconHeight2="0.13rem"
          tabHeight3="1.88rem"
          tabMinHeight3="1.88rem"
          tabCursor3="pointer"
          tabTextDecoration3="none"
          mainGap3="0.31rem"
          tabContentFontSize3="0.94rem"
          lineIconHeight3="0rem"
          tabHeight4="1.88rem"
          tabMinHeight4="1.88rem"
          tabCursor4="pointer"
          tabTextDecoration4="none"
          mainGap4="0.31rem"
          tabContentFontSize4="0.94rem"
          lineIconHeight4="0rem"
          tabHeight5="1.88rem"
          tabMinHeight5="1.88rem"
          tabCursor5="pointer"
          tabTextDecoration5="none"
          mainGap5="0.31rem"
          tabContentFontSize5="0.94rem"
          lineIconHeight5="0rem"
        />
      </header>
      <section className="self-stretch bg-primary-background overflow-hidden flex flex-row items-start justify-between p-[6.25rem] text-left text-[3.5rem] text-text-primary font-h1 border-b-[3px] border-solid border-grey-grey-300">
        <div className="flex flex-col items-start justify-start gap-[6.25rem]">
          <h1 className="m-0 relative text-inherit tracking-[-1.5px] leading-[112%] font-semibold font-inherit text-bldai-text-secondary">
            Primary color
          </h1>
          <div className="w-[47rem] flex flex-row items-end justify-between text-[0.88rem]">
            <div className="flex flex-col items-start justify-start gap-[0.31rem]">
              <div className="relative text-[0.75rem] tracking-[0.5px] leading-[266%] uppercase font-semibold text-bldai-text-secondary">
                SHADES
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">Main</p>
                    <p className="m-0 text-bldai-text-secondary">(#5C55B8)</p>
                  </span>
                </div>
                <div className="relative rounded bg-primary-main w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">{`Dark `}</p>
                    <p className="m-0 text-bldai-text-secondary">(#403B80)</p>
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
                        <b className="font-h1">{` `}</b>
                      </span>
                    </p>
                    <p className="m-0 text-bldai-text-secondary">(#DCDBF9)</p>
                  </span>
                </div>
                <div className="relative rounded bg-primary-light w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded bg-primary-main flex flex-row items-center justify-start p-[0.5rem] text-primary-contrast-text">
                <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <span>Contrast Text</span>
                    <b>{` `}</b>
                    <span>(#FFFFFF)</span>
                  </span>
                </div>
                <div className="relative rounded bg-primary-contrast-text box-border w-[2.88rem] h-[2.88rem] border-[1px] border-solid border-grey-grey-300" />
              </div>
              <div className="relative text-[0.75rem] tracking-[0.5px] leading-[266%] uppercase font-semibold text-bldai-text-secondary">
                STATES
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <span>{`Background `}</span>
                    <span className="text-bldai-text-secondary">(#F9FBFE)</span>
                  </span>
                </div>
                <div className="relative rounded bg-primary-background box-border w-[2.88rem] h-[2.88rem] border-[1px] border-solid border-grey-grey-300" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">{`Border `}</p>
                    <p className="m-0 text-bldai-text-secondary">(#ABA8DB)</p>
                  </span>
                </div>
                <div className="relative rounded bg-bldai-primary-border w-[2.88rem] h-[2.88rem]" />
              </div>
            </div>
            <div className="relative w-[26.88rem] h-[26.88rem]">
              <div className="absolute top-[0rem] left-[16.44rem] bg-bldai-primary-dark w-[10.44rem] h-[13.94rem]" />
              <div className="absolute top-[13.94rem] left-[16.44rem] bg-primary-light w-[10.44rem] h-[12.94rem]" />
              <div className="absolute top-[20.56rem] left-[16.44rem] bg-primary-background w-[10.44rem] h-[6.31rem]" />
              <div className="absolute top-[0rem] left-[0rem] bg-primary-main w-[16.44rem] h-[26.88rem]" />
              <div className="absolute top-[0rem] left-[16.44rem] bg-bldai-primary-border w-[1.25rem] h-[26.88rem]" />
            </div>
          </div>
          <div className="relative text-[1rem] tracking-[0.15px] leading-[150%] flex items-center w-[46.5rem]">{`The primary brand purple is the main purple that should be used across all materials. The slight variations of the purple should be used sparingly or as support of the main color when needed. `}</div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[6.25rem]">
          <h1 className="m-0 relative text-inherit tracking-[-1.5px] leading-[112%] font-semibold font-inherit text-bldai-text-secondary">
            Secondary color
          </h1>
          <div className="w-[47rem] flex flex-row items-end justify-between text-[0.88rem]">
            <div className="flex flex-col items-start justify-start gap-[0.31rem]">
              <div className="relative text-[0.75rem] tracking-[0.5px] leading-[266%] uppercase font-semibold text-bldai-text-secondary">
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
                    <p className="m-0 text-bldai-text-secondary">(#B3AFE9)</p>
                  </span>
                </div>
                <div className="relative rounded bg-secondary-main w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">Dark</p>
                    <p className="m-0 text-bldai-text-secondary">(#7D7AA3)</p>
                  </span>
                </div>
                <div className="relative rounded bg-secondary-dark w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">Light</p>
                    <p className="m-0 text-bldai-text-secondary">(#C2BFED)</p>
                  </span>
                </div>
                <div className="relative rounded bg-secondary-light w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded bg-secondary-main flex flex-row items-center justify-start p-[0.5rem] text-primary-contrast-text">
                <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">Contrast Text</p>
                    <p className="m-0">(#FFFFFF)</p>
                  </span>
                </div>
                <div className="relative rounded bg-primary-contrast-text box-border w-[2.88rem] h-[2.88rem] border-[1px] border-solid border-grey-grey-300" />
              </div>
              <div className="relative text-[0.75rem] tracking-[0.5px] leading-[266%] uppercase font-semibold text-bldai-text-secondary">
                STATES
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">Background</p>
                    <p className="m-0 text-bldai-text-secondary">(#F3F5FD)</p>
                  </span>
                </div>
                <div className="relative rounded bg-bldai-secondary-background box-border w-[2.88rem] h-[2.88rem] border-[1px] border-solid border-grey-grey-300" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">Border</p>
                    <p className="m-0 text-bldai-text-secondary">(#D6D5F3)</p>
                  </span>
                </div>
                <div className="relative rounded bg-bldai-secondary-border w-[2.88rem] h-[2.88rem]" />
              </div>
            </div>
            <div className="relative w-[26.88rem] h-[26.88rem]">
              <div className="absolute top-[0rem] left-[16.44rem] bg-secondary-dark w-[10.44rem] h-[13.94rem]" />
              <div className="absolute top-[13.94rem] left-[16.44rem] bg-secondary-light w-[10.44rem] h-[12.94rem]" />
              <div className="absolute top-[20.56rem] left-[16.44rem] bg-primary-contrast-text w-[10.44rem] h-[6.31rem]" />
              <div className="absolute top-[0rem] left-[0rem] bg-secondary-main w-[16.44rem] h-[26.88rem]" />
              <div className="absolute top-[0rem] left-[16.44rem] bg-bldai-secondary-border w-[1.25rem] h-[26.88rem]" />
            </div>
          </div>
          <div className="relative text-[1rem] tracking-[0.15px] leading-[150%] flex items-center w-[46.5rem]">{`The secondary purple is used to support the main purple. These shades are especially useful during dark mode or for when there are graphic elements present. `}</div>
        </div>
      </section>
      <section className="self-stretch bg-primary-background overflow-hidden flex flex-col items-start justify-start p-[6.25rem] gap-[6.25rem] text-left text-[3.5rem] text-text-primary font-h1 border-b-[3px] border-solid border-grey-grey-300">
        <h1 className="m-0 relative text-inherit tracking-[-1.5px] leading-[112%] font-semibold font-inherit text-bldai-text-secondary">
          Supporting colors
        </h1>
        <div className="w-[94.38rem] flex flex-row items-start justify-between text-[1.5rem]">
          <div className="overflow-hidden flex flex-col items-start justify-start gap-[1.56rem]">
            <h2 className="m-0 relative text-inherit leading-[133.4%] font-semibold font-inherit">
              Info
            </h2>
            <div className="flex flex-col items-start justify-start gap-[0.63rem] text-[0.88rem]">
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">Main</p>
                    <p className="m-0 text-bldai-text-secondary">(#4259ED)</p>
                  </span>
                </div>
                <div className="relative rounded bg-info-main w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">Dark</p>
                    <p className="m-0 text-bldai-text-secondary">(#0C1471)</p>
                  </span>
                </div>
                <div className="relative rounded bg-info-dark w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">Light</p>
                    <p className="m-0 text-bldai-text-secondary">(#D9E0FE)</p>
                  </span>
                </div>
                <div className="relative rounded bg-info-light w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">Dark Text</p>
                    <p className="m-0 text-bldai-text-secondary">(#1A245F)</p>
                  </span>
                </div>
                <div className="relative rounded bg-bldai-interface-info-dark-text w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">Background</p>
                    <p className="m-0 text-bldai-text-secondary">(#ECEEFD)</p>
                  </span>
                </div>
                <div className="relative rounded bg-bldai-interface-info-background box-border w-[2.88rem] h-[2.88rem] border-[1px] border-solid border-grey-grey-300" />
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
                    <p className="m-0 text-bldai-text-secondary">(#CE1A1D)</p>
                  </span>
                </div>
                <div className="relative rounded bg-error-main w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">Dark</p>
                    <p className="m-0 text-bldai-text-secondary">(#940D27)</p>
                  </span>
                </div>
                <div className="relative rounded bg-error-dark w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">Light</p>
                    <p className="m-0 text-bldai-text-secondary">(#FCDFD0)</p>
                  </span>
                </div>
                <div className="relative rounded bg-error-light w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">Dark Text</p>
                    <p className="m-0 text-bldai-text-secondary">(#520A0C)</p>
                  </span>
                </div>
                <div className="relative rounded bg-bldai-interface-error-dark-text w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">Background</p>
                    <p className="m-0 text-bldai-text-secondary">(#FAE8E8)</p>
                  </span>
                </div>
                <div className="relative rounded bg-bldai-interface-error-background box-border w-[2.88rem] h-[2.88rem] border-[1px] border-solid border-grey-grey-300" />
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
                    <p className="m-0 text-bldai-text-secondary">(#FFA100)</p>
                  </span>
                </div>
                <div className="relative rounded bg-warning-main w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">Dark</p>
                    <p className="m-0 text-bldai-text-secondary">(#FFA100)</p>
                  </span>
                </div>
                <div className="relative rounded bg-warning-dark w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">Light</p>
                    <p className="m-0 text-bldai-text-secondary">(#FFE9B4)</p>
                  </span>
                </div>
                <div className="relative rounded bg-warning-light w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">Dark Text</p>
                    <p className="m-0 text-bldai-text-secondary">(#664000)</p>
                  </span>
                </div>
                <div className="relative rounded bg-bldai-interface-warning-dark-text w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">Background</p>
                    <p className="m-0 text-bldai-text-secondary">(#FFF5E5)</p>
                  </span>
                </div>
                <div className="relative rounded bg-bldai-interface-warning-background box-border w-[2.88rem] h-[2.88rem] border-[1px] border-solid border-grey-grey-300" />
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
                    <p className="m-0 text-bldai-text-secondary">(#00C871)</p>
                  </span>
                </div>
                <div className="relative rounded bg-success-main w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">Dark</p>
                    <p className="m-0 text-bldai-text-secondary">(#00605C)</p>
                  </span>
                </div>
                <div className="relative rounded bg-success-dark w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">Light</p>
                    <p className="m-0 text-bldai-text-secondary">(#A1DCA3)</p>
                  </span>
                </div>
                <div className="relative rounded bg-success-light w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">Dark Text</p>
                    <p className="m-0 text-bldai-text-secondary">(#1E4620)</p>
                  </span>
                </div>
                <div className="relative rounded bg-bldai-interface-success-dark-text w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">Background</p>
                    <p className="m-0 text-bldai-text-secondary">(#EDF7ED)</p>
                  </span>
                </div>
                <div className="relative rounded bg-bldai-interface-success-background box-border w-[2.88rem] h-[2.88rem] border-[1px] border-solid border-grey-grey-300" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[1.56rem]">
            <h2 className="m-0 relative text-inherit leading-[133.4%] font-semibold font-inherit">
              Text
            </h2>
            <div className="flex flex-col items-start justify-start gap-[0.63rem] text-[0.88rem]">
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem] text-gray">
                <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">Primary</p>
                    <p className="m-0 text-bldai-text-secondary">(#253858)</p>
                  </span>
                </div>
                <div className="relative rounded bg-text-primary w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">Secondary</p>
                    <p className="m-0 text-bldai-text-secondary">(#5C6983)</p>
                  </span>
                </div>
                <div className="relative rounded bg-bldai-text-secondary w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">Disabled</p>
                    <p className="m-0 text-bldai-text-secondary">(#9A9C9D)</p>
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
                <div className="relative tracking-[0.15px] leading-[143%] [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#212121] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[10rem] shrink-0">
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
      <section className="self-stretch bg-primary-background box-border h-[67.59rem] overflow-hidden shrink-0 flex flex-col items-start justify-start p-[6.25rem] gap-[6.25rem] text-left text-[3.5rem] text-text-primary font-h1 border-b-[3px] border-solid border-grey-grey-300">
        <h1 className="m-0 relative text-inherit tracking-[-1.5px] leading-[112%] font-semibold font-inherit text-bldai-text-secondary">
          Interface colors
        </h1>
        <div className="self-stretch flex flex-row items-start justify-between text-[1.5rem]">
          <div className="w-[29.13rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[1.56rem]">
            <h2 className="m-0 relative text-inherit leading-[133.4%] font-semibold font-inherit">
              Grey Monochromes
            </h2>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0.63rem] text-[0.88rem]">
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#212121] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">grey-100</p>
                    <p className="m-0">(#F5F5F5)</p>
                  </span>
                </div>
                <div className="relative rounded bg-bldai-monochrome-grey-100 w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#212121] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">grey-200</p>
                    <p className="m-0">(#EEEEEE)</p>
                  </span>
                </div>
                <div className="relative rounded bg-bldai-monochrome-grey-200 w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">grey-300 (Main)</p>
                    <p className="m-0">(#E0E0E0)</p>
                  </span>
                </div>
                <div className="relative rounded bg-grey-grey-300 w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#212121] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">grey-350</p>
                    <p className="m-0">(#DBDCDF)</p>
                  </span>
                </div>
                <div className="relative rounded bg-bldai-monochrome-grey-350 w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#212121] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">grey-400</p>
                    <p className="m-0">(#bfc1c3)</p>
                  </span>
                </div>
                <div className="relative rounded bg-bldai-monochrome-grey-400 w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#212121] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">grey-450</p>
                    <p className="m-0">(#B9BABC)</p>
                  </span>
                </div>
                <div className="relative rounded bg-bldai-monochrome-grey-450 w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#212121] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">grey-500</p>
                    <p className="m-0">(#9E9E9E)</p>
                  </span>
                </div>
                <div className="relative rounded bg-bldai-monochrome-grey-500 w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#212121] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">grey-600</p>
                    <p className="m-0">(#757575)</p>
                  </span>
                </div>
                <div className="relative rounded bg-bldai-monochrome-grey-600 w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#212121] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">grey-700</p>
                    <p className="m-0">(#616161)</p>
                  </span>
                </div>
                <div className="relative rounded bg-bldai-monochrome-grey-700 w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#212121] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">grey-800</p>
                    <p className="m-0">(#424242)</p>
                  </span>
                </div>
                <div className="relative rounded bg-bldai-monochrome-grey-800 w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#212121] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">grey-850</p>
                    <p className="m-0">(#323232)</p>
                  </span>
                </div>
                <div className="relative rounded bg-bldai-monochrome-grey-850 w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#212121] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">grey-900</p>
                    <p className="m-0">(#212121)</p>
                  </span>
                </div>
                <div className="relative rounded [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#212121] w-[2.88rem] h-[2.88rem]" />
              </div>
            </div>
          </div>
          <div className="w-[28.38rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[1.56rem]">
            <h2 className="m-0 relative text-inherit leading-[133.4%] font-semibold font-inherit">
              Blue Monochromes
            </h2>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0.63rem] text-[0.88rem]">
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#212121] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">blue-grey-100</p>
                    <p className="m-0">(#F4F5F7)</p>
                  </span>
                </div>
                <div className="relative rounded bg-bldai-monochrome-blue-grey-100 w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#212121] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">blue-grey-200</p>
                    <p className="m-0">(#EDF0F2)</p>
                  </span>
                </div>
                <div className="relative rounded bg-bldai-monochrome-blue-grey-200 w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#212121] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">blue-grey-300</p>
                    <p className="m-0">(#E4E7EB)</p>
                  </span>
                </div>
                <div className="relative rounded bg-bluegrey-300 w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#212121] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">blue-grey-400</p>
                    <p className="m-0">(#C7CED4)</p>
                  </span>
                </div>
                <div className="relative rounded bg-bluegrey-400 w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#212121] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">blue-grey-500</p>
                    <p className="m-0">(#A6B1BB)</p>
                  </span>
                </div>
                <div className="relative rounded bg-bluegrey-500 w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#212121] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">blue-grey-600</p>
                    <p className="m-0">(#7B8B9A)</p>
                  </span>
                </div>
                <div className="relative rounded bg-bluegrey-600 w-[2.88rem] h-[2.88rem]" />
              </div>
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#212121] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">blue-grey-700</p>
                    <p className="m-0">(#66788A)</p>
                  </span>
                </div>
                <div className="relative rounded bg-bluegrey-700 w-[2.88rem] h-[2.88rem]" />
              </div>
            </div>
          </div>
          <div className="w-[28.38rem] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[1.56rem]">
            <h2 className="m-0 relative text-inherit leading-[133.4%] font-semibold font-inherit">
              Other
            </h2>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start text-[0.88rem]">
              <div className="rounded flex flex-row items-center justify-start p-[0.5rem]">
                <div className="relative tracking-[0.15px] leading-[143%] [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#212121] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[10rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">Active Rating</p>
                    <p className="m-0">(#FFB400)</p>
                  </span>
                </div>
                <div className="relative rounded bg-bldai-interface-other-activerating w-[2.88rem] h-[2.88rem]" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative text-[1rem] tracking-[0.15px] leading-[150%] flex items-center w-[51.94rem]">{`These shades are to be used sparingly such as in buttons are highlighting texts and bounding boxes. `}</div>
      </section>
    </div>
  );
};

export default Page3Colors;
