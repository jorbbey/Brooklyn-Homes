import React from 'react'
import logo from '../assets/logo3.png'
const Footer = () => {
  return (
    <footer className="bg-black">
      <section className="flex justify-between items-start my-5">
        <div className="w-[30%] border-r-2 border-[#bc963f] my-10 mx-5">
          <img src={logo} alt="brooklynhomes" className="w-[125px] my-5 mx-4" />
          <p className="text-white w-[90%] m-auto my-5 text-sm">
            With a passion for excellence and innovation, we specialize in
            property development, real estate investment, facility management,
            and investment advisory services. Our mission? To redefine the real
            estate experience by delivering premium properties and unparalleled
            customer satisfaction.
          </p>
        </div>

        <div className="w-[40%] my-10">
          <h1 className="m-auto w-[90%] my-5 text-2xl text-white font-semibold">
            Useful Links
          </h1>
          <ul className="m-auto w-[90%] my-4 text-white">
            <li>About</li>
          </ul>
        </div>

        <div className="w-[30%] border-l-2 border-gray-300 my-10">
          <h1 className="m-auto w-[90%] my-5 text-2xl text-white font-semibold">
            Follow Us
          </h1>
          <div className="m-auto w-[90%] my-4">
            <i>Facebook</i>
          </div>
        </div>
      </section>

      <section>
        <p>Copyright @ 2025 Brooklyn Homes Ltd. All Rights Reserved</p>
        <button className="p-4 bg-orange-700">Top</button>
      </section>
    </footer>
  );
}

export default Footer