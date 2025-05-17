import React from 'react'

const SubHero = ({text}) => {
  return (
    <div className="relative text-white h-96 flex items-center justify-center lg:justify-start bg-[url('/living-room.jpg')] bg-cover bg-center ">
      <div className="absolute inset-0 bg-black opacity-70 mix-blend-multiply"></div>
      <div className="relative z-10">
        <h1 className="text-white text-2xl md:text-3xl lg:text-5xl capitalize mx-10 ">
        {text}
        </h1>
      </div>
    </div>
  );
}

export default SubHero