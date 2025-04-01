import React from 'react'

const SubHero = ({text}) => {
  return (
    <div className="relative text-white h-[70vh] lg:h-96 flex items-center justify-center lg:justify-start bg-[url('/living-room2.jpg')] bg-cover bg-center ">
      <div className="absolute inset-0 bg-black opacity-50 mix-blend-multiply"></div>
      <div className="relative z-10">
        <h1 className="text-white text-sm md:text-lg lg:text-6xl uppercase mx-10 ">
        {text}
        </h1>
      </div>
    </div>
  );
}

export default SubHero