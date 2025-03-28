import React from 'react'
import logo from "../assets/logo3.png"
const Navbar = () => {
  const menuItems = [
    { text: "Home", link: "/" },
    { text: "About Us", link: "/about" },
    { text: "Our Projects", link: "/projects" },
    { text: "Contact Us", link: "/contact" },
    { text: "Blog", link: "/blog" },
  ];
  return (
    <header className="flex justify-between items-center">
      <i className="mx-5 my-4">
        <img src={logo} alt="logo" className="w-[125px]" />
      </i>

      <nav className="flex justify-around items-center">
        {menuItems.map((item) => (
          <li className="list-none mx-6 text-white hover:text-[#bc963f] cursor-pointer">
            {item.text}
          </li>
        ))}
      </nav>

      <button className="bg-[#bc963f] text-white p-4 mx-5">
        Schedule Visit
      </button>
    </header>
  );
}

export default Navbar