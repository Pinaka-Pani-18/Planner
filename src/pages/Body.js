import React from "react";

const Body = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-lg text-purple-500 tracking-widest font-medium title-font mb-1 font-serif italic  uppercase">
              Why we Are
            </h2>
            <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 font-serif text-center">
              About Event Booking
            </h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-serif text-black">
              At EventBooking, In our opinion , should be customized to meet the
              unique requirements of the host. We take the time to ge to know
              our clients and understand their vision. needs, and budget , so we
              can create an event that exceeds their expectation.
            </p>
            <p Name="w-full  font-serif text-black justify-center ">
              {" "}
              We pride ourselves on our attention to detaill, professionalism ,
              and commitment to our clients. Our goals is to create a seamless{" "}
              <br />
              and memorable event that you and your guests will cherish for
              years to come.
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h3 className="text-lg sm:text-xl text-gray-900 font-medium title-font font-sans mb-2 text-center">
                Servant Heart
              </h3>
              <p className="leading-relaxed text-base mb-4 font-serif text-black text-center ">
                Four business model is “Software as a Service ” and we really
                mean it. A Servant’s Heart is required to work at EventBooking.
                It’s the cornerstone of our 4 core values.
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h3 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 text-center">
                INNOVATOR’S MIND
              </h3>
              <p className="leading-relaxed text-base mb-4 text-black text-center font-serif">
                {" "}
                No process or solution is ever completely finished. EventBooking
                was born from an innovative idea, and we’ve grown because of
                that ongoing pursuit of innovation.
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h3 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 text-center">
                Playful Spirit
              </h3>
              <p className="leading-relaxed text-base mb-4 text-black font-serif">
                Don’t forget to have fun! Ralph Waldo Emerson said, “Nothing
                great was ever achieved without enthusiasm.” A playful spirit is
                not only important, but contagious.
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h3 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 text-center">
                OWNER’S GRIT
              </h3>
              <p className="leading-relaxed text-base mb-4 text-black font-serif">
                “Owner’s Grit” means taking extreme ownership and pride in your
                work. “Owning” one’s role is critical for building
                industry-leading software.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
