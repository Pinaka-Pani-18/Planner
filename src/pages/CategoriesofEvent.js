import React from "react";
import Link from "next/link";

const CategoriesofEvent = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-4 text-center uppercase">
          Categories of events
        </h2>
        <div className="flex flex-wrap -mx-4 justify-around ">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
            <div className="bg-white border rounded-lg overflow-hidden drop-shadow-xl  ">
              <img src="/wedding.webp" alt="Category 1" className="w-full" />
              <div className="p-4 shadow-lg">
                <h3 className="text-lg font-bold mb-2 text-center">Wedding</h3>
                <p className="text-sm mb-3 font-serif">
                  We would love to help make your special day a truly
                  unforgettable event. Our event booking services can provide
                  everything you need to make your wedding dreams a reality.
                </p>
                <Link href="/events?category=1" title="Event Details">
                  <span className=" sr-only">Event Details </span>
                  <span className="text-blue-900    rounded mt-4 inline-block ">
                    Learn More
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
            <div className="bg-white border rounded-lg overflow-hidden drop-shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1515982200576-f29f11444503?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                alt="Category 2"
                className="w-full"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-center ">
                  Corporate Event
                </h3>
                <p className="text-sm mb-3 font-serif">
                  {" "}
                  We would be delighted to help you plan and execute a memorable
                  event that reflects your company's style and brand. we have
                  the expertise to make your vision a reality.
                </p>
                <Link href="/events?category=2" title="Event Details">
                  <span className=" sr-only">Event Details </span>
                  <span className="text-blue-900    rounded mt-4 inline-block ">
                    Learn More
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
            <div className="bg-white border rounded-lg overflow-hidden drop-shadow-xl">
              <img
                src="https://img.freepik.com/free-photo/friends-gathered-celebrate-new-years-party_329181-5710.jpg?w=900&t=st=1681918916~exp=1681919516~hmac=17d35922777bdd94b4a1bc7e16922f72715d60be20c391ca546185d1aca13c54"
                alt="Category 3"
                className="w-full"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-center">
                  Private Party
                </h3>
                <p className="text-sm mb-3 font-serif">
                  {" "}
                  Thank you for considering our event booking services for your
                  upcoming private party. We would love to help you plan and
                  execute a memorable event that reflects your personal style.
                </p>
                <Link href="/events?category=3" title="Event Details">
                  <span className=" sr-only">Event Details </span>
                  <span className="text-blue-900    rounded mt-4 inline-block ">
                    Learn More
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
            <div className="bg-white border rounded-lg overflow-hidden drop-shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1549451371-64aa98a6f660?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Category 4"
                className="w-full"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-center">
                  Concert Party
                </h3>
                <p className="text-sm mb-3 font-serif">
                  We would be delighted to help you plan and execute a memorable
                  event that showcases your musical talent and entertains your
                  guest impresses with our services
                </p>
                <Link href="/events?category=4" title="Event Details">
                  <span className=" sr-only">Event Details </span>
                  <span className="text-blue-900    rounded mt-4 inline-block ">
                    Learn More
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
            <div className="bg-white border rounded-lg overflow-hidden drop-shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="Category 5"
                className="w-full"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-bold">
                  Catering Events{" "}
                </h3>
                <p className="text-sm mb-3 font-serif">
                  Thank you for considering our catering services for your
                  upcoming event at the decor and auditorium. We would be
                  delighted to help you plan and impresse your guest and other
                  people in the audiotorium and other events
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesofEvent;
