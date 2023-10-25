import Iframe from "react-iframe";
import React from "react";

const Map = () => {
  return (
    <>
      <iframe
        className=" relative container mx-auto px-4     items-center"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14616.865982373158!2d86.1250974871582!3d23.668214600000002
!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f42379b64af5f5%3A0xd776d88c9f712679!2sSANJAY%20CATERERS!5e0!3m2!
1sen!2sin!4v1684601459657!5m2!1sen!2sin"
        height="600px"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Location to Visit Us"
      ></iframe>
    </>
  );
};

export default Map;
