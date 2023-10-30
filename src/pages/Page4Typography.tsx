import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import TableHeaderRow from "../components/TableHeaderRow";

const Page4Typography: FunctionComponent = () => {
  return (
    <div className="relative bg-primary-background w-full flex flex-col items-start justify-start">
      <header className="self-stretch bg-primary-main box-border h-[12.59rem] overflow-hidden shrink-0 flex flex-row items-center justify-between p-[6.25rem] text-left text-[3.75rem] text-primary-contrast-text font-h1 border-b-[3px] border-solid border-grey-grey-300">
        <div className="self-stretch flex flex-row items-center justify-start gap-[3.13rem]">
          <img
            className="relative w-[3.13rem] h-[3.13rem]"
            alt=""
            src="/logoprimary1.svg"
          />
          <h1 className="m-0 relative text-inherit tracking-[0.5px] leading-[112%] font-semibold font-inherit">
            Typography
          </h1>
        </div>
        <NavigationBar
          line="/line1.svg"
          line1="/line1.svg"
          line2="/line1.svg"
          line3="/line5.svg"
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
          tabCursor2="pointer"
          tabTextDecoration2="none"
          mainGap2="0.31rem"
          tabContentFontSize2="0.94rem"
          lineIconHeight2="0rem"
          tabHeight3="1.88rem"
          tabMinHeight3="1.88rem"
          tabCursor3="unset"
          tabTextDecoration3="unset"
          mainGap3="0.31rem"
          tabContentFontSize3="0.94rem"
          lineIconHeight3="0.13rem"
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
      <main className="self-stretch bg-primary-background box-border h-[378.59rem] overflow-hidden shrink-0 flex flex-col items-start justify-start p-[6.25rem] gap-[6.25rem] border-b-[3px] border-solid border-grey-grey-300">
        <section className="self-stretch flex flex-col items-start justify-start gap-[4.69rem] text-left text-[3.5rem] text-text-primary font-h1 border-b-[3px] border-solid border-bluegrey-300">
          <h1 className="m-0 relative text-inherit tracking-[-1.5px] leading-[112%] font-semibold font-inherit text-bldai-text-secondary">
            Primary font
          </h1>
          <h1 className="m-0 relative text-[7.5rem] tracking-[-1.5px] leading-[112%] font-semibold font-inherit">
            Poppins
          </h1>
          <div className="relative w-[107.5rem] h-[31.81rem] text-[1.5rem]">
            <div className="absolute top-[0rem] left-[0rem] leading-[112%] flex items-center w-[107.5rem]">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0">
                  <span className="font-semibold font-h1">About</span>
                  <span></span>
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  Geometric sans serif typefaces have been a popular design tool
                  ever since these actors took to the world’s stage. Poppins is
                  one of the new comers to this long tradition. With support for
                  the Devanagari and Latin writing systems, it is an
                  internationalist take on the genre.
                </p>
                <p className="m-0"></p>
                <p className="m-0">
                  Many of the Latin glyphs (such as the ampersand) are more
                  constructed and rationalist than is typical. The Devanagari
                  design is particularly new, and is the first ever Devanagari
                  typeface with a range of weights in this genre. Just like the
                  Latin, the Devanagari is based on pure geometry, particularly
                  circles.
                </p>
                <p className="m-0"></p>
                <p className="m-0">
                  Each letterform is nearly monolinear, with optical corrections
                  applied to stroke joints where necessary to maintain an even
                  typographic color. The Devanagari base character height and
                  the Latin ascender height are equal; Latin capital letters are
                  shorter than the Devanagari characters, and the Latin x-height
                  is set rather high.
                </p>
              </span>
            </div>
            <div className="absolute top-[23.38rem] left-[0rem] leading-[112%] flex items-center w-[107.5rem]">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0 font-semibold">Usage</p>
                <p className="m-0">
                  <span>{`The primary font should be used in most contexts unless an exception is necessary for accessibility or practical reasons (eg. print formats), in which case `}</span>
                  <span className="font-semibold font-h1">{`Inter `}</span>
                  <span className="font-h1">may be substituted.</span>
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  Unless otherwise specified, when working with Poppins, use
                  112% leading (vertical line height), 0px letter spacing, and
                  sentence case.
                </p>
              </span>
            </div>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[0.06rem] shrink-0"
            alt=""
            src="/smarttabledivider1.svg"
          />
        </section>
        <section className="self-stretch box-border h-[55.09rem] flex flex-col items-start justify-start gap-[1.56rem] text-left text-[2.25rem] text-text-primary font-h1 border-b-[3px] border-solid border-bluegrey-300">
          <div className="self-stretch h-[5.88rem] flex flex-col items-start justify-start gap-[1.56rem]">
            <h3 className="m-0 self-stretch flex-1 relative text-inherit leading-[116.7%] font-semibold font-inherit flex items-center">
              Content headlines
            </h3>
            <div className="self-stretch flex-1 relative text-[1.5rem] leading-[112%] flex items-center">
              <span className="[line-break:anywhere]">
                <span className="font-semibold">{`Content headlines `}</span>
                <span>
                  are used in content formatting, such as webpage content, print
                  materials, and other non-interface use cases.
                </span>
              </span>
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[1.56rem] text-[0.75rem]">
            <div className="self-stretch flex flex-row items-start justify-start text-[1.5rem] text-bldai-text-secondary">
              <div className="box-border w-[17.5rem] h-[6.28rem] flex flex-col items-start justify-center p-[0.63rem] border-b-[1px] border-solid border-grey-grey-300">
                <div className="self-stretch flex-1 flex flex-row items-end justify-start">
                  <div className="relative leading-[133.4%] font-semibold">
                    Characteristics
                  </div>
                </div>
              </div>
              <div className="box-border w-[40.63rem] h-[6.28rem] flex flex-col items-start justify-center p-[0.63rem] border-b-[1px] border-solid border-grey-grey-300">
                <div className="self-stretch flex-1 flex flex-row items-end justify-start">
                  <div className="relative leading-[133.4%] font-semibold">
                    Variants
                  </div>
                </div>
              </div>
              <h4 className="m-0 flex-1 box-border h-[6.28rem] flex flex-col items-start justify-center p-[0.63rem] text-inherit font-inherit border-b-[1px] border-solid border-grey-grey-300">
                <div className="self-stretch flex-1 flex flex-row items-end justify-start">
                  <div className="relative leading-[133.4%] font-semibold">
                    Description
                  </div>
                </div>
              </h4>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="w-[17.5rem] h-[6.25rem] flex flex-col items-start justify-center">
                <div className="self-stretch flex-1 flex flex-row items-center justify-start py-[0rem] px-[0.63rem]">
                  <b className="relative tracking-[1px] leading-[150%] uppercase flex whitespace-pre-wrap items-center w-[17.5rem] shrink-0">
                    <span className="[line-break:anywhere] w-full">
                      <p className="m-0">Weight: bold</p>
                      <p className="m-0">Letter spacing: 0.5px</p>
                      <p className="m-0">Leading: 112%</p>
                    </span>
                  </b>
                </div>
              </div>
              <div className="w-[40.63rem] h-[6.25rem] flex flex-col items-start justify-center text-[7.5rem]">
                <div className="self-stretch flex-1 flex flex-row items-center justify-start py-[0rem] px-[0.63rem]">
                  <h1 className="m-0 relative text-inherit tracking-[0.5px] leading-[112%] font-bold font-inherit">
                    Headline
                  </h1>
                </div>
              </div>
              <div className="w-[40.63rem] h-[6.25rem] flex flex-col items-start justify-center text-[1.5rem]">
                <div className="self-stretch flex-1 flex flex-row items-center justify-start py-[0rem] px-[0.63rem]">
                  <div className="relative leading-[112%] flex items-center w-[49.13rem] shrink-0">
                    <span className="[line-break:anywhere] w-full">
                      <span className="font-semibold">Headlines</span>
                      <span>{` and display texts are used for emphasizing main titles and idea. Poppins Bold with a .5px letter spacing should be used. `}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="w-[17.5rem] h-[6.25rem] flex flex-col items-start justify-center">
                <div className="self-stretch flex-1 flex flex-row items-center justify-start py-[0rem] px-[0.63rem]">
                  <b className="relative tracking-[1px] leading-[150%] uppercase flex whitespace-pre-wrap items-center w-[17.5rem] shrink-0">
                    <span className="[line-break:anywhere] w-full">
                      <p className="m-0">
                        Weight: semi-bold Letter spacing: 0.5px
                      </p>
                      <p className="m-0">Leading: 112%</p>
                    </span>
                  </b>
                </div>
              </div>
              <div className="w-[40.63rem] h-[6.25rem] flex flex-col items-start justify-center text-[3.75rem]">
                <div className="self-stretch flex-1 flex flex-row items-center justify-start py-[0rem] px-[0.63rem]">
                  <h1 className="m-0 relative text-inherit tracking-[0.5px] leading-[112%] font-semibold font-inherit">
                    Subheader
                  </h1>
                </div>
              </div>
              <div className="w-[40.63rem] h-[6.25rem] flex flex-col items-start justify-center text-[1.5rem]">
                <div className="self-stretch flex-1 flex flex-row items-center justify-start py-[0rem] px-[0.63rem]">
                  <div className="relative leading-[112%] flex items-center w-[49.13rem] shrink-0">
                    <span className="[line-break:anywhere] w-full">
                      <span className="font-semibold">Subheaders</span>
                      <span>
                        {" "}
                        are used to support the headline text. Poppins Bold with
                        a .5px letter spacing should be used. Ideally it is half
                        of the size of the headline text to maintain contrast.
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="w-[17.5rem] h-[6.25rem] flex flex-col items-start justify-center">
                <div className="self-stretch flex-1 flex flex-row items-center justify-start py-[0rem] px-[0.63rem]">
                  <b className="relative tracking-[1px] leading-[150%] uppercase flex whitespace-pre-wrap items-center w-[17.5rem] shrink-0">
                    <span className="[line-break:anywhere] w-full">
                      <p className="m-0">Weight: regular</p>
                      <p className="m-0">Letter spacing: 0px</p>
                      <p className="m-0">Leading: 112%</p>
                    </span>
                  </b>
                </div>
              </div>
              <div className="w-[40.63rem] h-[6.25rem] flex flex-col items-start justify-center text-[1.88rem]">
                <div className="self-stretch flex-1 flex flex-row items-center justify-start py-[0rem] px-[0.63rem]">
                  <div className="relative tracking-[0.5px] leading-[112%]">
                    Subtitle
                  </div>
                </div>
              </div>
              <div className="w-[40.63rem] h-[6.25rem] flex flex-col items-start justify-center text-[1.5rem]">
                <div className="self-stretch flex-1 flex flex-row items-center justify-start py-[0rem] px-[0.63rem]">
                  <div className="relative leading-[112%] flex items-center w-[49.13rem] shrink-0">
                    <span className="[line-break:anywhere] w-full">
                      <span className="font-semibold">{`Subtitles `}</span>
                      <span>
                        are used to support the subheader or headline text.
                        Poppins Regular with no letter spacing should be used.
                        Ideally it is half of the size of the subheader text to
                        maintain contrast.
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch box-border h-[55.09rem] flex flex-row items-start justify-start text-left text-[2.25rem] text-text-primary font-h1 border-b-[3px] border-solid border-bluegrey-300">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[1.56rem]">
            <h3 className="m-0 relative text-inherit leading-[116.7%] font-semibold font-inherit">
              Headers
            </h3>
            <div className="relative text-[1.5rem] leading-[112%] flex items-center w-[49.13rem]">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0">
                  <span className="font-semibold font-h1">{`Headers `}</span>
                  <span>
                    are used as section titles and user interface components on
                    web pages and frontend applications.
                  </span>
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  Unless otherwise specified, use semi-bold weight for headers.
                  Sentence case or upper case may be used.
                </p>
              </span>
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-col items-start justify-start text-[0.75rem]">
            <TableHeaderRow/>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 h-[6.25rem] flex flex-col items-start justify-center">
                <div className="self-stretch flex-1 flex flex-row items-center justify-start py-[0rem] px-[0.63rem]">
                  <b className="relative tracking-[1px] leading-[150%] uppercase flex whitespace-pre-wrap items-center w-[17.5rem] shrink-0">
                    <span className="[line-break:anywhere] w-full">
                      <p className="m-0">Letter spacing: -1.5px</p>
                      <p className="m-0">Leading: 112%</p>
                    </span>
                  </b>
                </div>
              </div>
              <div className="flex-1 h-[6.25rem] flex flex-col items-start justify-center text-[3.5rem]">
                <div className="self-stretch flex-1 flex flex-row items-center justify-start py-[0rem] px-[0.63rem]">
                  <h1 className="m-0 relative text-inherit tracking-[-1.5px] leading-[112%] font-semibold font-inherit">
                    Header 1 - H1
                  </h1>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 h-[6.25rem] flex flex-col items-start justify-center">
                <div className="self-stretch flex-1 flex flex-row items-center justify-start py-[0rem] px-[0.63rem]">
                  <b className="relative tracking-[1px] leading-[150%] uppercase flex whitespace-pre-wrap items-center w-[17.5rem] shrink-0">
                    <span className="[line-break:anywhere] w-full">
                      <p className="m-0">Letter spacing: -0.5px</p>
                      <p className="m-0">Leading: 112%</p>
                    </span>
                  </b>
                </div>
              </div>
              <div className="flex-1 h-[6.25rem] flex flex-col items-start justify-center text-[3rem]">
                <div className="self-stretch flex-1 flex flex-row items-center justify-start py-[0rem] px-[0.63rem]">
                  <h1 className="m-0 relative text-inherit tracking-[-0.5px] leading-[112%] font-semibold font-inherit">
                    Header 2 - H2
                  </h1>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 h-[6.25rem] flex flex-col items-start justify-center">
                <div className="self-stretch flex-1 flex flex-row items-center justify-start py-[0rem] px-[0.63rem]">
                  <b className="relative tracking-[1px] leading-[150%] uppercase flex whitespace-pre-wrap items-center w-[17.5rem] shrink-0">
                    <span className="[line-break:anywhere] w-full">
                      <p className="m-0">Letter spacing: 0px</p>
                      <p className="m-0">Leading: 112%</p>
                    </span>
                  </b>
                </div>
              </div>
              <div className="flex-1 h-[6.25rem] flex flex-col items-start justify-center text-[2.25rem]">
                <div className="self-stretch flex-1 flex flex-row items-center justify-start py-[0rem] px-[0.63rem]">
                  <h3 className="m-0 relative text-inherit leading-[112%] font-semibold font-inherit">
                    Header 3 - H3
                  </h3>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 h-[6.25rem] flex flex-col items-start justify-center">
                <div className="self-stretch flex-1 flex flex-row items-center justify-start py-[0rem] px-[0.63rem]">
                  <b className="relative tracking-[1px] leading-[150%] uppercase flex whitespace-pre-wrap items-center w-[17.5rem] shrink-0">
                    <span className="[line-break:anywhere] w-full">
                      <p className="m-0">Letter spacing: 0.25px</p>
                      <p className="m-0">Leading: 112%</p>
                    </span>
                  </b>
                </div>
              </div>
              <div className="flex-1 h-[6.25rem] flex flex-col items-start justify-center text-[2rem]">
                <div className="self-stretch flex-1 flex flex-row items-center justify-start py-[0rem] px-[0.63rem]">
                  <div className="relative tracking-[0.25px] leading-[112%] font-semibold">
                    Header 4 - H4
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 h-[6.25rem] flex flex-col items-start justify-center">
                <div className="self-stretch flex-1 flex flex-row items-center justify-start py-[0rem] px-[0.63rem]">
                  <b className="relative tracking-[1px] leading-[150%] uppercase flex whitespace-pre-wrap items-center w-[17.5rem] shrink-0">
                    <span className="[line-break:anywhere] w-full">
                      <p className="m-0">Letter spacing: 0px</p>
                      <p className="m-0">Leading: 112%</p>
                    </span>
                  </b>
                </div>
              </div>
              <div className="flex-1 h-[6.25rem] flex flex-col items-start justify-center text-[1.5rem]">
                <div className="self-stretch flex-1 flex flex-row items-center justify-start py-[0rem] px-[0.63rem]">
                  <div className="relative leading-[112%] font-semibold">
                    Header 5 - H5
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 h-[6.25rem] flex flex-col items-start justify-center">
                <div className="self-stretch flex-1 flex flex-row items-center justify-start py-[0rem] px-[0.63rem]">
                  <b className="relative tracking-[1px] leading-[150%] uppercase flex whitespace-pre-wrap items-center w-[17.5rem] shrink-0">
                    <span className="[line-break:anywhere] w-full">
                      <p className="m-0">Letter spacing: 0.15px</p>
                      <p className="m-0">Leading: 112%</p>
                    </span>
                  </b>
                </div>
              </div>
              <div className="flex-1 h-[6.25rem] flex flex-col items-start justify-center text-[1.13rem]">
                <div className="self-stretch flex-1 flex flex-row items-center justify-start py-[0rem] px-[0.63rem]">
                  <div className="relative tracking-[0.15px] leading-[112%] font-semibold">
                    Header 6 - H6
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch box-border h-[55.09rem] flex flex-row items-start justify-start text-left text-[2.25rem] text-text-primary font-h1 border-b-[3px] border-solid border-bluegrey-300">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[3.13rem]">
            <h3 className="m-0 relative text-inherit leading-[116.7%] font-semibold font-inherit">
              Body text
            </h3>
            <div className="relative text-[1.5rem] leading-[112%] flex items-center w-[49.13rem]">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0">
                  Parts of the paragraph proportions might vary depending on
                  application, but leading, letter spacing, and font case should
                  never be altered.
                </p>
                <p className="m-0"></p>
                <p className="m-0">
                  We primarily left align all of our paragraphs, though center
                  aligned can be used sparingly for short lines of text.
                  Remember to allow paragraphs to “breathe” by leaving negative
                  space around them, and in the overall composition.
                </p>
                <p className="m-0"></p>
                <p className="m-0">
                  In most cases, make sure to keep the overall paragraph the
                  same width.
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  Standard leading is 112%, and standard letter spacing is 0px.
                </p>
              </span>
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[3.13rem] text-[1.5rem]">
            <div className="self-stretch flex flex-row items-start justify-start text-bldai-text-secondary">
              <div className="flex-1 flex flex-col items-start justify-center p-[0.63rem] border-b-[1px] border-solid border-grey-grey-300">
                <div className="self-stretch h-[5rem] flex flex-row items-end justify-start">
                  <div className="relative leading-[133.4%] font-semibold">
                    Variants
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 flex flex-col items-start justify-center">
                <div className="self-stretch flex flex-row items-center justify-start py-[0rem] px-[0.63rem]">
                  <div className="relative leading-[112%]">Paragraph 1</div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start text-[1.25rem]">
              <div className="flex-1 flex flex-col items-start justify-center">
                <div className="self-stretch flex flex-row items-center justify-start py-[0rem] px-[0.63rem]">
                  <div className="relative leading-[112%]">Paragraph 2</div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start text-[1rem]">
              <div className="flex-1 flex flex-col items-start justify-center">
                <div className="self-stretch flex flex-row items-center justify-start py-[0rem] px-[0.63rem]">
                  <div className="relative leading-[112%]">Paragraph 3</div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start text-[0.88rem]">
              <div className="flex-1 flex flex-col items-start justify-center">
                <div className="self-stretch flex flex-row items-center justify-start py-[0rem] px-[0.63rem]">
                  <div className="relative leading-[112%]">Paragraph 4</div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start text-[0.75rem]">
              <div className="flex-1 flex flex-col items-start justify-center">
                <div className="self-stretch flex flex-row items-center justify-start py-[0rem] px-[0.63rem]">
                  <div className="relative leading-[112%]">Paragraph 5</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch flex-1 flex flex-col items-start justify-start gap-[1.56rem] text-left text-[2.25rem] text-text-primary font-h1 border-b-[3px] border-solid border-bluegrey-300">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.56rem]">
            <h3 className="m-0 relative text-inherit leading-[116.7%] font-semibold font-inherit">
              Special use
            </h3>
            <div className="relative text-[1.5rem] leading-[112%] flex items-center w-[49.13rem]">
              These font variants are for special use / alternative purposes.
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[1.56rem] text-[0.75rem]">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[1.56rem]">
              <TableHeaderRow
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 flex flex-col items-start justify-center">
                  <div className="self-stretch flex flex-row items-center justify-start py-[0rem] px-[0.63rem]">
                    <b className="relative tracking-[1px] leading-[150%] uppercase whitespace-pre-wrap">
                      <p className="m-0">Letter spacing: 0px</p>
                      <p className="m-0">Leading: 150%</p>
                      <p className="m-0">WEIGHT: Semi-bold</p>
                      <p className="m-0">CASE: upper</p>
                    </b>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center text-[0.94rem]">
                  <div className="self-stretch flex flex-row items-center justify-start py-[0rem] px-[0.63rem]">
                    <div className="relative leading-[150%] uppercase font-semibold flex items-center w-[13rem] h-[1.25rem] shrink-0">
                      BUTTON
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 flex flex-col items-start justify-center">
                  <div className="self-stretch flex flex-row items-center justify-start py-[0rem] px-[0.63rem]">
                    <b className="relative tracking-[1px] leading-[150%] uppercase flex whitespace-pre-wrap items-center w-[17.5rem] shrink-0">
                      <span className="[line-break:anywhere] w-full">
                        <p className="m-0">Letter spacing: 0.5px</p>
                        <p className="m-0">Leading: 150%</p>
                        <p className="m-0">WEIGHT: REgular</p>
                      </span>
                    </b>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center">
                  <div className="self-stretch flex flex-row items-center justify-start py-[0rem] px-[0.63rem]">
                    <div className="relative tracking-[0.5px] leading-[150%] flex items-end w-[13rem] h-[1.25rem] shrink-0">
                      caption
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 flex flex-col items-start justify-center">
                  <div className="self-stretch flex flex-row items-center justify-start py-[0rem] px-[0.63rem]">
                    <b className="relative tracking-[1px] leading-[150%] uppercase flex whitespace-pre-wrap items-center w-[17.5rem] shrink-0">
                      <span className="[line-break:anywhere] w-full">
                        <p className="m-0">Letter spacing: 0.5px</p>
                        <p className="m-0">Leading: 250%</p>
                        <p className="m-0">WEIGHT: Semi-bold</p>
                        <p className="m-0">CASE: Upper</p>
                      </span>
                    </b>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center">
                  <div className="self-stretch flex flex-row items-center justify-start py-[0rem] px-[0.63rem]">
                    <div className="relative tracking-[0.5px] leading-[250%] uppercase font-semibold flex items-center w-[13rem] h-[1.25rem] shrink-0">
                      overline
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-col items-start justify-start">
              <TableHeaderRow
              />
            </div>
          </div>
        </section>
        <section className="self-stretch box-border h-[55.09rem] flex flex-col items-start justify-start gap-[1.56rem] text-left text-[3.5rem] text-text-primary font-h1 border-b-[3px] border-solid border-bluegrey-300">
          <h1 className="m-0 relative text-inherit tracking-[-1.5px] leading-[112%] font-semibold font-inherit text-bldai-text-secondary">
            Monospace font
          </h1>
          <div className="relative w-[53.25rem] h-[15.25rem] text-[7.5rem] font-bldai-special-monospace">
            <h1 className="m-0 absolute top-[0%] left-[0%] text-inherit leading-[100%] font-bold font-inherit">
              Anonymous Pro
            </h1>
            <b className="absolute top-[9.06rem] left-[0rem] text-[1.5rem] leading-[100%]">
              Anonymous Pro
            </b>
          </div>
          <div className="self-stretch relative text-[1.5rem] leading-[112%]">
            <p className="m-0 font-semibold">About</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Anonymous Pro is a fixed-width sans-serif typeface designed for
              coding and text editing. It has a similar geometric and modern
              style as Poppins, but with more distinctive letterforms and
              punctuation marks. It supports multiple languages and has four
              variants: regular, italic, bold, and bold italic.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 font-semibold">Usage</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              This font may be used in cases where monospaced text is required
              or desired for aesthetic purposes. In keeping with the monospace
              formatting, do not alter the letter spacing or leading of this
              font when in use.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page4Typography;
