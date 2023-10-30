import { FunctionComponent, memo } from "react";

const BuildTogether: FunctionComponent = memo(() => {
  return (
    <section className="self-stretch bg-bldai-primary-background overflow-hidden flex flex-col items-start justify-center py-[6.25rem] px-[10rem] gap-[3.13rem] text-center text-[2.25rem] text-bldai-text-primary font-buttonlarge">
      <h1 className="m-0 relative text-inherit leading-[112%] font-semibold font-inherit">
        Let’s build together.
      </h1>
      <div className="self-stretch flex flex-row items-start justify-start gap-[1.56rem] text-left text-[1.13rem] text-bldai-primary-main sm:flex-col sm:gap-[1.56rem] sm:items-start sm:justify-start">
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.63rem] sm:flex-[unset] sm:self-stretch">
          <h6 className="m-0 self-stretch relative text-inherit tracking-[0.15px] leading-[112%] font-semibold font-inherit">
            High quality software services
          </h6>
          <div className="self-stretch relative text-[1rem] leading-[112%] text-bldai-text-secondary">
            Our unique business model is designed to attract top-tier talent
            around the world, ensuring we deliver the highest quality software
            services for our clients.
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.69rem] sm:flex-[unset] sm:self-stretch">
          <h6 className="m-0 self-stretch relative text-inherit tracking-[0.15px] leading-[112%] font-semibold font-inherit">
            We’ve served clients like you
          </h6>
          <div className="self-stretch relative text-[1rem] leading-[112%] text-bldai-text-secondary">
            We have served over 100 clients, ranging from from top enterprises
            to VC-backed startups. Our project sizes range from $10,000 to
            $10,000,000+ USD.
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem] sm:flex-[unset] sm:self-stretch">
          <h6 className="m-0 self-stretch relative text-inherit tracking-[0.15px] leading-[112%] font-semibold font-inherit">
            Over 800 skilled workers
          </h6>
          <div className="self-stretch relative text-[1rem] leading-[112%] text-bldai-text-secondary">
            Our partner network includes more than 800 skilled workers
            including, data scientists, designers, developers, engineers, and
            product managers. 
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.44rem] sm:flex-[unset] sm:self-stretch">
          <h6 className="m-0 self-stretch relative text-inherit tracking-[0.15px] leading-[112%] font-semibold font-inherit">
            Cost competitive
          </h6>
          <div className="self-stretch relative text-[1rem] leading-[112%] text-bldai-text-secondary">
            Our footprint around the globe not only makes us one of the most
            cost-competitive firms in the world, but with the lowest overhead in
            the business, our workers take home more.
          </div>
        </div>
      </div>
    </section>
  );
});

export default BuildTogether;
