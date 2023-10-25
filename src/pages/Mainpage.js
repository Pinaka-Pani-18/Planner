import React from 'react'
import { Zap } from 'react-feather';
import { Camera } from 'react-feather';
import { Aperture } from "react-feather"
import { Edit } from "react-feather"
import { Feather } from "react-feather";
import { Play } from "react-feather";

const Mainpage = () => {
  return (

    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto shadow-lg">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center ">
          <h2 className="sm:text-3xl text-2xl  title-font mb-2 text-gray-900 text-bold font-bold uppercase font-serif  ">We Provide you the best services</h2>
          <p className="lg:w-1/2 w-full leading-relaxed font-bold font-serif text-black font-serif">At a cheaper and valuable Price</p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                <Zap />
              </div>
              <h3 className="text-lg text-gray-900 font-medium title-font mb-2">Decoration</h3>
              <p className="leading-relaxed text-base font-serif text-black">Professionally Design decor at attractive prices</p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                <Camera />
              </div>
              <h3 className="text-lg text-gray-900 font-medium title-font mb-2">Photography</h3>
              <p className="leading-relaxed text-base font-serif text-black">Expert candid and traditional photography teams</p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex font-serif items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                <Aperture />
              </div>
              <h3 className="text-lg text-gray-900 font-medium title-font mb-2">Videography</h3>
              <p className="leading-relaxed text-base font-serif text-black">High  quality traditional and candid Videography  </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                <Edit />
              </div>
              <h3 className="text-lg text-gray-900 font-medium title-font mb-2">Makeup  & hairStyling</h3>
              <p className="leading-relaxed text-base font-serif text-black">Talented makeup artists who ensure you look your best.</p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                <Feather />
              </div>
              <h3 className="text-lg text-gray-900 font-medium title-font mb-2">Mehendi</h3>
              <p className="leading-relaxed text-base font-serif text-black">Expreienced Mehendi artists who provide a wide range of designs</p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                <Play />
              </div>
              <h3 className="text-lg text-gray-900 font-medium title-font mb-2">Entertainment</h3>
              <p className="leading-relaxed text-base font-serif text-black"> From DJs to traditional performance, we have high quality artists</p>
            </div>
          </div>
        </div>

      </div>
    </section>

  )
}

export default Mainpage;