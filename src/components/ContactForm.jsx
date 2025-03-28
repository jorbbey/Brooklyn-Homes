import React from 'react'
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
const ContactForm = () => {
  return (
    <section className="flex justify-between items-start mt-60">
      <div className="w-[45%] mx-5">
        <h1 className="mb-24 text-5xl ">Request for more information</h1>

        <h4 className="my-5 font-semibold text-[#bc963f]">
          Ready to take the first step?
        </h4>
        <p className="my-5">
          We would like to be of help, please keep your questions coming.
        </p>
        <h1 className="mt-16 text-xl">Contact us via phone or email</h1>
        <div className="flex justify-between items-center w-[70%] my-5">
          <span className="flex justify-between items-center">
            <IoPhonePortraitOutline />
            <p className="mx-2">+234 567 8901 234</p>
          </span>

          <span className="flex justify-between items-center">
            <CiMail />
            <p className="mx-2">info@broklynhomes.com</p>
          </span>
        </div>
      </div>

      <form
        action="#!"
        className="w-1/2 flex flex-col items-start justify-evenly"
      >
        <div className="flex justify-between items-center w-full">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="my-5 p-2 border-1 border-gray-500 w-[48%]"
          />
          <input
            type="number"
            name="number"
            placeholder="Phone Number"
            className="my-5 p-2 border-1 border-gray-500 w-[48%] focus:border-[#bc963f]"
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className=" my-5 p-2 border-1 border-gray-500 w-full"
        />
        <textarea
          className=" my-5 p-8 border-1 border-gray-500 w-full"
          placeholder="Message"
        ></textarea>

        <button className="bg-[#bc963f] p-4 my-5 flex items-center text-xs cursor-pointer">
          SEND MESSAGE
          <FaArrowRightLong className="mx-2" />
        </button>
      </form>
    </section>
  );
}

export default ContactForm