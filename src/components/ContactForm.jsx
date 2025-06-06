import React, { useState, useContext } from "react";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import Modal from "./Modal";
import { BackgroundContext } from "./BackgroundContext";

const ContactForm = () => {

  const { isDark } = useContext(BackgroundContext);

  const [result, setResult] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    setShowModal(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "42241d4a-d454-48ce-a1a6-75949f6eb4cc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("✅ Message sent successfully!");
      event.target.reset();
    } else {
      console.log("Error:", data);
      setResult("❌ Failed to send message. Please try again.");
    }
  };
  return (
    <section
      className={
        isDark
          ? "bg-black text-white flex flex-col lg:flex-row justify-between items-center lg:items-start mt-28 lg:mt-60"
          : "bg-white text-black flex flex-col lg:flex-row justify-between items-center lg:items-start mt-28 lg:mt-60"
      }
    >
      <div className="w-[95%] lg:w-[45%] lg:mx-5">
        <h1 className="mb-5 text-3xl md:text-5xl ">
          Request for more information
        </h1>

        <h4 className="mb-5 lg:my-5 font-semibold text-[#cf9a1e]">
          Ready to invest or find your dream home?
        </h4>
        <p className="my-2">Contact us today!</p>
        <h1 className="mt-5 lg:mt-16 text-lg md:text-xl">
          Contact us via phone or email
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full md:w-[70%] my-5">
          <div className="my-2">
            <span className="flex justify-between items-center">
              <IoPhonePortraitOutline />
              <p className="mx-2 text-sm">+234 705 677 6557</p>
            </span>
            <span className="flex justify-between items-center">
              <IoPhonePortraitOutline />
              <p className="mx-2 text-sm">+234 813 630 8083</p>
            </span>
          </div>

          <span className="flex justify-between items-center">
            <CiMail />
            {/* <p className="mx-2 text-sm">info@broklynhomes.com</p> */}

            <a
              className="mx-2 text-sm"
              href="mailto:brooklynrealtyltd@gmail.com"
            >
              brooklynrealtyltd@gmail.com
            </a>
          </span>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-[90%] lg:w-1/2 flex flex-col items-start justify-evenly my-10 lg:my-0"
      >
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="my-2 p-2 border-1 border-gray-500 w-full md:w-[48%]"
          />
          <input
            type="number"
            name="number"
            placeholder="Phone Number"
            className="my-2 p-2 border-1 border-gray-500 w-full md:w-[48%]"
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className=" my-2 p-2 border-1 border-gray-500 w-full"
        />
        <textarea
          className=" my-5 p-8 border-1 border-gray-500 w-full"
          placeholder="Message"
          name="message"
          required
        ></textarea>

        <button
          className="bg-[#cf9a1e] p-4 my-5 flex items-center text-xs text-white font-bold cursor-pointer"
          type="submit"
        >
          SEND MESSAGE
          <FaArrowRightLong className="mx-2" />
        </button>
      </form>

      {showModal && (
        <Modal
          message={result}
          onClose={() => {
            setShowModal(false);
            setResult("");
          }}
        />
      )}
    </section>
  );
};

export default ContactForm;
