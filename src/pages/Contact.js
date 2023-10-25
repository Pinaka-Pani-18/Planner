import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function EventBooking() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_n0xz6jq",
        "template_hl6is0g",
        form.current,
        "lLapA1Gdu62h7SR47"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="max-w-screen-xl mx-auto my-12 p-6 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-bold mb-6 font-serif text-center">
          Message US
        </h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="user_name"
            >
              Name
            </label>
            <input
              className="border border-gray-400 p-2 w-full
                  rounded-md"
              required
              type="text"
              name="user_name"
              id="user_name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="user_email">Email</label>
            <input
              className="border border-gray-400 p-2 w-full
                  rounded-md"
              required
              type="email"
              name="user_email"
              id="user_email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message">Event Name</label>

            <textarea
              className="border border-gray-400 p-2 w-full rounded-md"
              name="message"
              id="message"
            />
          </div>
          <input
            onClick={() => alert("Success")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
            type="submit"
            value="Send"
          />
        </form>
        <div></div>
      </div>
    </>
  );
}
