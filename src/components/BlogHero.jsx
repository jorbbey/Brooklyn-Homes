import React from 'react'

const BlogHero = ({text, image}) => {
  return (
    //   <div className="relative text-white h-screen flex items-center justify-center lg:justify-start bg-cover bg-center " style={{ backgroundImage: `url(${image})` }}>
    //     <div className="absolute inset-0 bg-black opacity-50 mix-blend-multiply"></div>
    //     <div className="relative z-10">
    //       <h1 className="text-white text-2xl md:text-3xl lg:text-5xl capitalize mx-10 ">
    //         {text}
    //       </h1>
    //     </div>
    //   </div>
    <div className="relative">
      <div className="absolute inset-0 bg-black opacity-25 mix-blend-multiply"></div>
      <img src={image} alt="text" className="w-full" />
    </div>
  );
}

export default BlogHero