import React from 'react'

const BlogHero = ({text, image}) => {
  return (
    <div className="relative text-black h-[75vh] lg:h-[100vh] bg-cover bg-center flex justify-center items-end" style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-black opacity-25 mix-blend-multiply"></div>
      <div className="relative z-10 bg-black md:w-[70%] lg:w-1/2 p-5 my-5 lg:my-10 opacity-85">  
        <h1 className="text-black text-2xl md:text-3xl lg:text-5xl capitalize">
          {text}
        </h1>
      </div>
    </div>
    // <div className="relative h-[100vh] overflow-hidden">
    //   <div className="absolute inset-0 bg-black opacity-25 mix-blend-multiply"></div>
    //   <img src={image} alt="text" className="" />
    //   <div className="absolute md:bottom-52 lg:bottom-16 ">
    //     <div className="bg-gray-950 md:w-[70%] lg:w-1/2 p-5 m-auto opacity-85">
    //       <h1 className="text-black text-2xl md:text-3xl lg:text-5xl capitalize opacity-100">
    //         {text}
    //       </h1>
    //     </div>
    //   </div>
    // </div>
  );
}

export default BlogHero