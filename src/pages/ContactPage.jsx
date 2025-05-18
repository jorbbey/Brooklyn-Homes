import React, {useState} from 'react'
import Map from '../components/Map'
import SubHero from '../components/SubHero'
import Modal from '../components/Modal';
import { IoLocationOutline } from "react-icons/io5";
import { BiPhoneCall } from "react-icons/bi";
import { MdAttachEmail } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuAsterisk } from "react-icons/lu";
import SEO from '../components/SEO';
const ContactPage = () => {
const [result, setResult] = useState("");
const [showModal, setShowModal] = useState(false);

    const contactInfo = [
      {
        icon: IoLocationOutline,
        head: "Location",
        desc: "Brooklyn Homes Ltd, Plot 785, Herbert Macaulay way, Central Business District, Abuja",
      },
      {
        icon: BiPhoneCall,
        head: "Call us on",
        desc: "+234 705 6776 557",
      },
      {
        icon: MdAttachEmail,
        head: "Email us",
        desc: "brooklynrealtyltd@gmail.com",
      },
    ];

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
    <>
      <SEO
        title="Contact Us | Brooklyn Homes"
        description="Get in touch with Brooklyn Homes. Visit our office, give us a call, or send us an email. We're here to help you with real estate, construction, and investment solutions."
        keywords="Contact Brooklyn Homes, real estate contact, property management contact, Abuja real estate, call Brooklyn Homes, email Brooklyn Homes, real estate support"
        iimage="https://brooklynhomesltd.com/homepage_seo_img.webp"
        url="https://brooklynhomesltd.com/contact"
      />
      <div className="text-black">
        <SubHero text="contact us" />
        <section>
          <div className="mt-28 w-[90%] md:w-[75%] lg:w-1/2 m-auto">
            <h1 className="text-4xl md:text-5xl text-[#cf9a1e] fomt-bold text-center">
              How to find us
            </h1>
            <p className="text-center text-gray-950 my-5">
              You can visit us at the address below, call us or send us an email
            </p>
          </div>
          <div className="flex flex-col lg:flex-row flex-wrap items-center  justify-between w-[90%] lg:w-3/4 m-auto my-20">
            {contactInfo.map((item) => (
              <div
                key={item.head}
                className="flex flex-col items-start justify-center lg:justify-start w-full lg:w-[30%] border-b-2 border-r-0 lg:border-b-0 lg:border-r-2 border-gray-500 h-28 my-2 md:my-0"
              >
                <span className="flex">
                  <item.icon className="mx-2 text-2xl md:text-3xl" />
                  <h3 className="text-md md:text-lg mx-2">{item.head}</h3>
                </span>
                <p className="text-gray-950 mx-14 text-sm my-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <Map lat={9.050231} lon={7.487945} text="Brooklyn Homes Office" />

        <div className="mt-28 w-[90%] md:w-[75%] lg:w-1/2 m-auto">
          <h1 className="text-4xl md:text-5xl text-center">
            Have any questions?
          </h1>
          <p className="text-center my-5 text-[#cf9a1e] font-semibold">
            Ready to invest or find your dream home?
          </p>
          <p className="text-center text-gray-950 my-5 text-sm md:text-md">
            We would like to be of help, please keep your questions coming.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-[90%] lg:w-3/4 m-auto flex flex-col items-start justify-evenly my-16"
        >
          <div className="flex flex-col md:flex-row justify-between items-center w-full">
            <span className="flex flex-col w-full md:w-[48%]">
              <label htmlFor="name" className="flex text-sm">
                Your Name <LuAsterisk className="text-xs" />
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="my-5 p-2 border-1 border-gray-500 text-sm "
                required
              />
            </span>

            <span className="flex flex-col w-full md:w-[48%]">
              <label htmlFor="name" className="flex text-sm">
                Your Email <LuAsterisk className="text-xs" />
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className=" my-5 p-2 border-1 border-gray-500 text-sm"
                required
              />
            </span>
          </div>

          <span className="flex flex-col w-full">
            <label htmlFor="name" className="flex text-sm">
              Your Phone <LuAsterisk className="text-xs" />
            </label>
            <input
              type="number"
              name="number"
              placeholder="Phone Number"
              className="my-5 p-2 border-1 border-gray-500  focus:border-[#cf9a1e] text-sm"
              required
            />
          </span>

          <span className="flex flex-col w-full">
            <label htmlFor="name" className="flex text-sm">
              Your Message
            </label>
            <textarea
              className=" my-5 p-2 h-40 border-1 border-gray-500 text-sm"
              placeholder="message"
              name="message"
            ></textarea>
          </span>

          <button
            type="submit"
            className="bg-[#cf9a1e] p-4 my-5 flex items-center text-xs text-white cursor-pointer"
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
      </div>
    </>
  );
}

export default ContactPage