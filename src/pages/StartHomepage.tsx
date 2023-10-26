import { FunctionComponent } from "react";
import StartHeader from "../components/StartHeader";
import CaseStudyContainer from "../components/CaseStudyContainer";
import Footer from "../components/Footer";

const StartHomepage: FunctionComponent = () => {
  return (
    <div className="relative w-full flex flex-col items-start justify-start">
      <StartHeader />
      <section className="self-stretch bg-primary-background overflow-hidden flex flex-col items-start justify-center py-[6.25rem] px-[10rem] gap-[3.13rem] text-center text-[2.25rem] text-text-primary font-h1">
        <h1 className="m-0 relative text-inherit leading-[112%] font-semibold font-inherit">
          Let’s build together.
        </h1>
        <div className="self-stretch flex flex-row items-start justify-start gap-[1.56rem] text-left text-[1.13rem] text-primary-main">
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.63rem]">
            <div className="self-stretch relative tracking-[0.15px] leading-[112%] font-semibold">
              High quality software services
            </div>
            <div className="self-stretch relative text-[1rem] leading-[112%] text-bldai-text-secondary">
              Our unique business model is designed to attract top-tier talent
              around the world, ensuring we deliver the highest quality software
              services for our clients.
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.69rem]">
            <div className="self-stretch relative tracking-[0.15px] leading-[112%] font-semibold">
              We’ve served clients like you
            </div>
            <div className="self-stretch relative text-[1rem] leading-[112%] text-bldai-text-secondary">
              We have served over 100 clients, ranging from from top enterprises
              to VC-backed startups. Our project sizes range from $10,000 to
              $10,000,000+ USD.
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
            <div className="self-stretch relative tracking-[0.15px] leading-[112%] font-semibold">
              Over 800 skilled workers
            </div>
            <div className="self-stretch relative text-[1rem] leading-[112%] text-bldai-text-secondary">
              Our partner network includes more than 800 skilled workers
              including, data scientists, designers, developers, engineers, and
              product managers. 
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.44rem]">
            <div className="self-stretch relative tracking-[0.15px] leading-[112%] font-semibold">
              Cost competitive
            </div>
            <div className="self-stretch relative text-[1rem] leading-[112%] text-bldai-text-secondary">
              Our footprint around the globe not only makes us one of the most
              cost-competitive firms in the world, but with the lowest overhead
              in the business, our workers take home more.
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch bg-primary-main flex flex-col items-center justify-start py-[4.69rem] px-[10rem] text-left text-[1.25rem] text-primary-contrast-text font-h1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem]">
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[0.63rem]">
            <h1 className="m-0 self-stretch relative text-[2.25rem] leading-[112%] font-semibold font-inherit">
              Ready to get started?
            </h1>
            <div className="self-stretch relative leading-[112%]">
              Our team can quickly provide a proposal, estimate, and even
              wireframes for any software project.
            </div>
            <div className="self-stretch relative leading-[112%]">
              Want to learn more? Check out a few case studies of our previous
              work below.
            </div>
          </div>
          <a
            className="[text-decoration:none] rounded flex flex-col items-start justify-start text-[0.94rem] text-[inherit]"
            href="https://www.bld.ai/launch"
            target="_blank"
          >
            <div className="rounded flex flex-col items-center justify-start py-[0.5rem] px-[1.38rem] border-[1px] border-solid border-primary-contrast-text">
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <div className="relative leading-[1.63rem] font-semibold">
                  Request a proposal
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="self-stretch h-[48.63rem] flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[4rem] box-border text-[2rem]">
          <div className="self-stretch flex flex-row items-start justify-start pt-[4rem] px-[0rem] pb-[0rem] gap-[2rem]">
            <div className="relative w-[49rem] h-[18.31rem] overflow-hidden shrink-0">
              <div className="absolute top-[-0.04rem] left-[0rem] rounded-[21.33px] bg-text-primary w-[49rem] h-[17.88rem] overflow-hidden flex flex-row items-center justify-center py-[5rem] px-[2rem] box-border">
                <div className="w-[36.56rem] flex flex-col items-start justify-start gap-[1.33rem]">
                  <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                    <div className="flex flex-col items-start justify-start gap-[0.31rem]">
                      <h1 className="m-0 relative text-inherit tracking-[0.25px] leading-[112%] font-semibold font-inherit inline-block w-[24.19rem]">{`bld for Mining & Energy`}</h1>
                      <div className="relative text-[1.25rem] leading-[112%] inline-block w-[24.14rem] opacity-[0.56]">
                        <p className="m-0">We’ve worked with some of the top</p>
                        <p className="m-0">{`mining & energy companies on Earth.`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start text-[0.94rem] text-bldai-monochrome-grey-350">
                    <div className="rounded flex flex-col items-center justify-start py-[0.5rem] px-[0rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                        <div className="overflow-hidden flex flex-row items-center justify-start">
                          <div className="relative leading-[1.63rem] font-semibold">
                            See case studies
                          </div>
                        </div>
                        <img
                          className="relative w-[1.5rem] h-[1.5rem]"
                          alt=""
                          src="/mastericonrightlarge.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="absolute top-[3.76rem] left-[34.38rem] w-[10.75rem] h-[10.69rem] overflow-hidden opacity-[0.2]"
                alt=""
                src="/frame.svg"
              />
            </div>
            <CaseStudyContainer
              header="bld for AI"
              companyDescription="It’s in the name - we’ve been on the cutting edge of AI development for years."
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-[4rem] px-[0rem] pb-[0rem] gap-[2rem]">
            <div className="relative w-[49rem] h-[18.31rem] overflow-hidden shrink-0">
              <div className="absolute top-[-0.04rem] left-[0rem] rounded-[21.33px] bg-bldai-primary-dark w-[49rem] h-[17.88rem] overflow-hidden flex flex-row items-center justify-center py-[5rem] px-[2rem] box-border">
                <div className="w-[36.56rem] flex flex-col items-start justify-start gap-[1.33rem]">
                  <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                    <div className="flex flex-col items-start justify-start gap-[0.31rem]">
                      <h1 className="m-0 relative text-inherit tracking-[0.25px] leading-[112%] font-semibold font-inherit inline-block w-[21.83rem]">
                        bld for Startups
                      </h1>
                      <div className="relative text-[1.25rem] leading-[112%] inline-block w-[24.14rem] opacity-[0.56]">
                        We’re a startup, so we know what it takes to be
                        successful.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start text-[0.94rem] text-bldai-monochrome-grey-350">
                    <div className="rounded flex flex-col items-center justify-start py-[0.5rem] px-[0rem]">
                      <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                        <div className="overflow-hidden flex flex-row items-center justify-start">
                          <div className="relative leading-[1.63rem] font-semibold">
                            See case studies
                          </div>
                        </div>
                        <img
                          className="relative w-[1.5rem] h-[1.5rem]"
                          alt=""
                          src="/mastericonrightlarge.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="absolute top-[3.76rem] left-[34.38rem] w-[10.75rem] h-[10.69rem] overflow-hidden opacity-[0.2]"
                alt=""
                src="/frame2.svg"
              />
            </div>
            <CaseStudyContainer
              header="bld for Web3"
              companyDescription="From fintech to innovative Web3"
              propBackgroundColor="#403b80"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default StartHomepage;
