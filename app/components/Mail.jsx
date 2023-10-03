"use client";
import React, { useState } from "react";

import { useForm, ValidationError } from "@formspree/react";

const Mail = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const [state, handleSubmit] = useForm("xbjvpaog");
  if (state.succeeded) {
    return (
      <div class="flex justify-center items-start h-screen">
        <h5 className="text-xl font-bold text-white my-2 grid md:grid-cols-1 my-12 md:my-12 py-24 gap-4">
          Thanks for joining
        </h5>
      </div>
    );
  }

  return (
    <>
      <div
        className="z-10
    grid
    md:grid-cols-1
    my-12
    md:my-12
    py-12
    gap-4
    relative"
      >
        <form className="flex flex-col " onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="fullname"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Full Name
            </label>
            <input
              type="text"
              id="fullname"
              required
              name="name"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Safnas kaldeen"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              required
              name="email"
              value={email}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="safnas.20@cse.mrt.ac.lk"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              name="subject"
              value={subject}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={message}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>

        <div className="bg-slate-100 flex flex-col">
          {error &&
            error.map((e) => (
              <div
                className={`${
                  success ? "text-green-800" : "text-red-600"
                } px-5 py-2`}
              >
                {e}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Mail;
